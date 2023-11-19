import {
  createRoot,
  createEffect,
  on,
  createSignal,
  createMemo,
} from 'solid-js';
import { lang, t } from 'helper/i18n';
import { store, setState } from '../../store';
import { createOptions, setMessage } from './helper';
import { getValidTranslators, selfhostedTranslation } from './selfhosted';
import { cotransTranslation, cotransTranslators } from './cotrans';
import { setOption } from '../helper';

declare const toast: // eslint-disable-next-line @typescript-eslint/consistent-type-imports
typeof import('components/Toast/toast').toast | undefined;

/** 翻译指定图片 */
export const translationImage = async (i: number) => {
  try {
    if (typeof GM_xmlhttpRequest === 'undefined') {
      toast?.error(t('pwa.alert.userscript_not_installed'));
      throw new Error(t('pwa.alert.userscript_not_installed'));
    }

    const img = store.imgList[i];
    if (!img?.src) return;

    if (img.translationType !== 'wait') return;

    if (img.translationUrl)
      return setState((state) => {
        state.imgList[i].translationType = 'show';
      });

    if (img.loadType !== 'loaded')
      return setMessage(i, t('translation.tip.img_not_fully_loaded'));

    const translationUrl = await (store.option.translation.server === 'cotrans'
      ? cotransTranslation
      : selfhostedTranslation)(i);

    setState((state) => {
      state.imgList[i].translationUrl = translationUrl;
      state.imgList[i].translationMessage = t(
        'translation.tip.translation_completed',
      );
      state.imgList[i].translationType = 'show';
    });
  } catch (error) {
    setState((state) => {
      state.imgList[i].translationType = 'error';
      if ((error as Error).message)
        state.imgList[i].translationMessage = (error as Error).message;
    });
  }
};

let running = false;

/** 逐个翻译状态为等待翻译的图片 */
const translationAll = async (): Promise<void> => {
  if (running) return;

  const i = store.imgList.findIndex(
    (img) => img.loadType === 'loaded' && img.translationType === 'wait',
  );
  if (i === -1) return;

  running = true;
  try {
    await translationImage(i);
  } finally {
    running = false;
  }
  return translationAll();
};

/** 开启或关闭指定图片的翻译 */
export const setImgTranslationEnbale = (list: number[], enbale: boolean) => {
  setState((state) => {
    list.forEach((i) => {
      const img = state.imgList[i];
      if (!img) return;

      if (enbale) {
        if (state.option.translation.forceRetry) {
          img.translationType = 'wait';
          img.translationUrl = undefined;
          setMessage(i, t('translation.tip.wait_translation'));
        } else {
          switch (img.translationType) {
            case 'hide': {
              img.translationType = 'show';
              break;
            }
            case 'error':
            case undefined: {
              img.translationType = 'wait';
              setMessage(i, t('translation.tip.wait_translation'));
              break;
            }
          }
        }
      } else {
        switch (img.translationType) {
          case 'show': {
            img.translationType = 'hide';
            break;
          }
          case 'error':
          case 'wait': {
            img.translationType = undefined;
            break;
          }
        }
      }
    });
  });

  return translationAll();
};

export const translatorOptions = createRoot(() => {
  const [selfhostedOptions, setSelfOptions] = createSignal<[string, string][]>(
    [],
  );

  // 在切换翻译服务器的同时切换可用翻译的选项列表
  createEffect(
    on(
      [
        () => store.option.translation.server,
        () => store.option.translation.localUrl,
      ],
      async () => {
        if (store.option.translation.server !== 'selfhosted') return;

        setSelfOptions((await getValidTranslators()) ?? []);

        // 如果切换服务器后原先选择的翻译服务失效了，就换成谷歌翻译
        if (
          !selfhostedOptions().some(
            ([val]) => val === store.option.translation.options.translator,
          )
        ) {
          setOption((draftOption) => {
            draftOption.translation.options.translator = 'google';
          });
        }
      },
    ),
  );

  const options = createMemo(
    on([selfhostedOptions, lang], () =>
      store.option.translation.server === 'selfhosted'
        ? selfhostedOptions()
        : createOptions(cotransTranslators),
    ),
  );

  return options;
});