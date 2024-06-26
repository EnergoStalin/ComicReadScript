import { describe, expect, it, vi } from 'vitest';

import { getAdPageByFileName } from './detectAd';

vi.mock('main', () => ({}));

const isEqual = async (fileNameList: string[], targetList: number[]) =>
  expect(
    [...(await getAdPageByFileName(fileNameList))].sort((a, b) => a - b),
  ).toStrictEqual(targetList);

describe('可以通过文件名判断的', () => {
  // https://exhentai.org/g/2789069/3e6809f891/
  it('正常数字编号，广告图有 zzz 前戳', async () => {
    const fileNameList =
      '005_.jpg,058_.jpg,059_.jpg,060_.jpg,061_.jpg,062_.jpg,063_.jpg,064_.jpg,065_.jpg,066_.jpg,067_.jpg,068_.jpg,069_.jpg,070_.jpg,071_.jpg,072_.jpg,073_.jpg,074_.jpg,075_.jpg,076_.jpg,077_.jpg,078_.jpg,079_.jpg,080_.jpg,081_.jpg,zzz1.1.jpg,zzz2.jpg,zzz3.jpg,zzz4.1.png,zzz4.3.jpg,zzz8.jpg'.split(
        ',',
      );
    return isEqual(fileNameList, [25, 26, 27, 28, 29, 30]);
  });

  // https://exhentai.org/g/2780702/e2e7ec0f1e/
  it('正常图片有 image 前戳，广告图有 ZZZ 前戳', async () => {
    const fileNameList =
      'Image01.jpg,Image02.jpg,Image03.jpg,Image04.jpg,Image05.jpg,Image06.jpg,Image07.jpg,Image08.jpg,Image09.jpg,Image10.jpg,Image11.jpg,Image12.jpg,Image13.jpg,Image14.jpg,Image15.jpg,Image16.jpg,Image17.jpg,Image18.jpg,Image19.jpg,Image20.jpg,Image21.jpg,Image22.jpg,Image23.jpg,Image24.jpg,Image25.jpg,Image26.jpg,Image27.jpg,Image28.jpg,Image29.jpg,Image30.jpg,Image31.jpg,Image32.jpg,Image33.jpg,Image34.jpg,Image35.jpg,Image36.jpg,Image37.jpg,Image38.jpg,Image39.jpg,Image40.jpg,Image41.jpg,Image42.jpg,Image43.jpg,Image44.jpg,Image45.jpg,Image46.jpg,Image47.jpg,Image48.jpg,Image49.jpg,Image50.jpg,Image51.jpg,Image52.jpg,Image53.jpg,Image54.jpg,Image55.jpg,Image56.jpg,ZZZZZ_2024.jpg'.split(
        ',',
      );
    return isEqual(fileNameList, [56]);
  });

  // https://exhentai.org/g/2787874/7f9bf5431f/
  it('前面都是正常的数字编号，54P 开始有了 _bonus 后辍', async () => {
    const fileNameList =
      '01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg,07.jpg,08.jpg,09.jpg,10.jpg,11.jpg,12.jpg,13.jpg,14.jpg,15.jpg,16.jpg,17.jpg,18.jpg,19.jpg,20.jpg,21.jpg,22.jpg,23.jpg,24.jpg,25.jpg,26.jpg,27.jpg,28.jpg,29.jpg,30.jpg,31.jpg,32.jpg,33.jpg,34.jpg,35.jpg,36.jpg,37.jpg,38.jpg,39.jpg,40.jpg,41.jpg,42.jpg,43.jpg,44.jpg,45.jpg,46.jpg,47.jpg,48.jpg,49.jpg,50.jpg,51.jpg,52.jpg,53.jpg,54_bonus.jpg,55_bonus.jpg,56_bonus.jpg,57_bonus.jpg,58_bonus.jpg,59_bonus.jpg,60_bonus.jpg,61_bonus.jpg,ZZZZ1..jpg,ZZZZ1..jpg,ZZZZ1.3.jpg,ZZZZ2..png,ZZZZ2..jpg,ZZZZ2..jpg,ZZZZ7.jpg'.split(
        ',',
      );
    return isEqual(fileNameList, [61, 62, 63, 64, 65, 66, 67]);
  });

  // https://exhentai.org/g/2798461/bd22361186/
  it('有多个不同的前戳', async () => {
    const fileNameList =
      'page_0001.jpg,page_0002.jpg,page_0003.jpg,page_0004.jpg,page_0005.jpg,page_0006.jpg,page_0007.jpg,page_0008.jpg,page_0009.jpg,page_0010.jpg,page_0011.jpg,page_0012.jpg,page_0013.jpg,page_0014.jpg,page_0015.jpg,page_0016.jpg,page_0017.jpg,page_0018.jpg,page_0019.jpg,page_0020.jpg,page_0021.jpg,page_0022.jpg,page_0023.jpg,page_0024.jpg,page_0025.jpg,page_0026.jpg,page_0027.jpg,page_0028.jpg,page_0029.jpg,page_0030.jpg,page_0031.jpg,page_0032.jpg,page_0033.jpg,page_0034.jpg,page_0035.jpg,page_0036.jpg,page_0037.jpg,page_0038.jpg,page_0039.jpg,page_0040.jpg,page_0041.jpg,page_0042.jpg,page_0043.jpg,page_0044.jpg,page_0045.jpg,page_0046.jpg,page_0047.jpg,page_0048.jpg,page_0049.jpg,page_0050.jpg,pages_to_jpg_0001.jpg,pages_to_jpg_0002.jpg,pages_to_jpg_0003.jpg,pages_to_jpg_0004.jpg,pages_to_jpg_0005.jpg,pages_to_jpg_0006.jpg,pages_to_jpg_0007.jpg,pages_to_jpg_0008.jpg,pages_to_jpg_0009.jpg,pages_to_jpg_0010.jpg,pages_to_jpg_0011.jpg,pages_to_jpg_0012.jpg,pages_to_jpg_0013.jpg,pages_to_jpg_0014.jpg,zzz1.jpg,zzz2.2.png,zzz2.3.jpg,zzz2.jpg,zzz8.jpg'.split(
        ',',
      );
    return isEqual(fileNameList, [64, 65, 66, 67, 68]);
  });

  // https://exhentai.org/g/2603192/c41d68c542/
  it('数字编号+乱码后辍，有重复名，没有按数字顺序排列，广告图 title', async () => {
    const fileNameList =
      '01_aRYpBhIrgPP7qpP9zPSnq5m8.jpg,02_ihByQWjY9ZdE56kohP2cv1pq.jpg,03_HceAqTkJF3v3e4iJrzr7hMLO.jpg,04_Lugl2J3Z4fbjUvENNM7QAr6L.jpg,05_skyWKm36U1JIxoE8I1KJXI7u.jpg,06_Xq6EBCCsM59ns0zTtGatZsHc.jpg,07_s9ICyDxzrgdgwu8H4sn2KR0g.jpg,08_KE6NUeSSIAvcm2ZXCCNJdTXY.jpg,09_xXunVM1TvKUDRYZXnD2adF1i.jpg,10_Tc01BNRkURxLMwq5rmrjWdLN.jpg,11_O72DhjKWcZ0bpp7fnt1VdA44.jpg,12_urQSoKKjUTXB3uqTztyVCPnu.jpg,13_f1diOrHbwEUdKa1jHfUyQvtr.jpg,00.jpg,07.jpg,08.jpg,09.jpg,10.jpg,11.jpg,00.jpg,01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg,07.jpg,08.jpg,09.jpg,00.jpg,06.jpg,07.jpg,08.jpg,09.jpg,00.jpg,01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg,07.jpg,08.jpg,09.jpg,00.jpg,01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg,07.jpg,08.jpg,00.jpg,01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg,07.jpg,08.jpg,title.jpg'.split(
        ',',
      );
    return isEqual(fileNameList, []);
  });

  // https://exhentai.org/g/2802288/2c0c8b283d/
  it('设定集', async () => {
    const fileNameList =
      '"cover.jpg","i_001.jpg","i_002.jpg","i_003.jpg","i_004.jpg","i_005.jpg","i_153.jpg","i_154.jpg","i_155.jpg","i_156.jpg","i_157.jpg","i_158.jpg","i_159.jpg","i_160.jpg","i_161.jpg","i_allcover_001.jpg","i_allcover_002.jpg","i_bookwalker.jpg","i_colophon.jpg","i_flap_001.jpg","i_hyoushi_001.jpg","i_hyoushi_002.jpg"'.split(
        ',',
      );
    return isEqual(fileNameList, []);
  });

  it('正常编号', async () => {
    const fileNameList =
      '01.jpg,02.jpg,03.jpg,04.jpg,05.jpg,06.jpg,07.jpg,08.jpg,09.jpg'.split(
        ',',
      );
    return isEqual(fileNameList, []);
  });
});

// QrScanner 要在 node 环境下测试太折腾了，暂且手动测试

// 正常含有广告的
// https://exhentai.org/g/2091919/177dbd301e/
// https://exhentai.org/g/2794568/da8216a0f7/
// https://exhentai.org/g/2105031/6b6ba8c2bc/

// 自带二维码的
// https://exhentai.org/g/2803287/5190dbcdcc/
// https://exhentai.org/g/2780710/383706a3ca/
// https://exhentai.org/g/2804668/e584aa403b/
