import { useManga, useFab, useSpeedDial, isEqualArray, toast } from '../main';
import type { AsyncReturnType } from '../helper';
import { useSiteOptions } from '../helper/useSiteOptions';

setTimeout(async () => {
  const { options, setOptions, isRecorded } = await useSiteOptions(
    window.location.hostname,
    { autoShow: false },
  );

  /** 图片列表 */
  let imgList: string[] = [];
  /** 是否正在后台不断检查图片 */
  let running = 0;

  let setManga: AsyncReturnType<typeof useManga>[0];
  let setFab: AsyncReturnType<typeof useFab>;

  const init = async () => {
    if (setManga !== undefined) return;

    [setManga] = await useManga({
      imgList,
      show: options.autoShow,
      onOptionChange: (option) => setOptions({ ...options, option }, false),
    });

    setFab = await useFab({
      tip: '阅读模式',
      onClick: () => setManga({ show: true }),
      speedDial: useSpeedDial(options, setOptions),
    });
    setFab();
  };

  /** 已经被触发过懒加载的图片 */
  const triggedImgList: Set<HTMLImageElement> = new Set();
  /** 触发懒加载 */
  const triggerLazyLoad = () => {
    const targetImgList = [...document.getElementsByTagName('img')]
      // 过滤掉已经被触发过懒加载的图片
      .filter((e) => !triggedImgList.has(e))
      // 根据位置从小到大排序
      .sort((a, b) => a.offsetTop - b.offsetTop);

    /** 上次触发的图片 */
    let lastTriggedImg: HTMLImageElement | undefined;
    targetImgList.forEach((e) => {
      triggedImgList.add(e);

      // 过滤掉位置相近，在触发上一张图片时已经顺带被触发了的
      if (e.offsetTop >= (lastTriggedImg?.offsetTop ?? 0) + window.innerHeight)
        return;

      // 通过瞬间滚动到图片位置、触发滚动事件、再瞬间滚回来，来触发图片的懒加载
      const nowScroll = window.scrollY;
      window.scroll({ top: e.offsetTop, behavior: 'auto' });
      e.dispatchEvent(new Event('scroll', { bubbles: true }));
      window.scroll({ top: nowScroll, behavior: 'auto' });

      lastTriggedImg = e;
    });
  };

  /**
   * 检查搜索页面上符合标准的图片
   * @returns 返回是否成功找到图片
   */
  const checkFindImg = () => {
    triggerLazyLoad();

    const newImgList = [...document.getElementsByTagName('img')]
      .filter((e) => e.naturalHeight > 500 && e.naturalWidth > 500)
      .map((e) => e.src);

    if (newImgList.length === 0) {
      if (!options.autoShow) {
        clearInterval(running);
        toast.error('没有找到图片');
      }
      return false;
    }

    // 在发现新图片后重新渲染
    if (!isEqualArray(imgList, newImgList)) {
      imgList = newImgList;
      setManga({ imgList });
      setFab({ progress: 1 });
    }

    return true;
  };

  await GM.registerMenuCommand('进入漫画阅读模式', async () => {
    await init();

    if (!running) running = window.setInterval(checkFindImg, 2000);
    if (!checkFindImg()) return;
    setManga({ show: true });

    // 自动启用自动加载功能
    await setOptions({ ...options, autoShow: true });

    await GM.registerMenuCommand('停止在此站点自动运行脚本', () =>
      GM.deleteValue(window.location.hostname),
    );
  });

  if (isRecorded) {
    await init();
    // 为了保证兼容，只能简单粗暴的不断检查网页的图片来更新数据
    running = window.setInterval(checkFindImg, 2000);

    await GM.registerMenuCommand('停止在此站点自动运行脚本', () =>
      GM.deleteValue(window.location.hostname),
    );
  }
});
