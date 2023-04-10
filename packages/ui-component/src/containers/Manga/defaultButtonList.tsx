import MdLooksOne from '@material-design-icons/svg/round/looks_one.svg';
import MdLooksTwo from '@material-design-icons/svg/round/looks_two.svg';
import MdViewDay from '@material-design-icons/svg/round/view_day.svg';
import MdQueue from '@material-design-icons/svg/round/queue.svg';
import MdSettings from '@material-design-icons/svg/round/settings.svg';
import MdSearch from '@material-design-icons/svg/round/search.svg';

import { useMemo, useCallback, useState } from 'react';
import { useStore } from './hooks/useStore';
import { IconButton } from '../IconButton';
import { SettingPanel } from './components/SettingPanel';

import classes from './index.module.css';

interface DefaultSettingsButtonProps {
  /** 触发鼠标离开工具栏的事件 */
  onMouseLeave: () => void;
}

export type ToolbarButtonList = [
  string,
  React.FC<DefaultSettingsButtonProps>,
][];

/** 工具栏按钮分隔栏 */
export const buttonListDivider: [string, React.FC] = [
  '',
  () => <div style={{ height: '1em' }} />,
];

/** 工具栏的默认按钮列表 */
export const defaultButtonList: ToolbarButtonList = [
  [
    '单双页模式',
    () => {
      const isOnePageMode = useStore((state) => state.option.onePageMode);
      const handleClick = useCallback(() => {
        useStore.setState((state) => {
          state.option.onePageMode = !state.option.onePageMode;
          state.img.updatePageData.sync(state);
          state.activePageIndex = state.option.onePageMode
            ? state.activeImgIndex
            : state.pageList.findIndex((page) =>
                page.includes(state.activeImgIndex),
              );
        });
      }, []);

      const isScrollMode = useStore((state) => state.option.scrollMode);

      return (
        <IconButton
          tip={isOnePageMode ? '单页模式' : '双页模式'}
          onClick={handleClick}
          hidden={isScrollMode}
        >
          {isOnePageMode ? <MdLooksOne /> : <MdLooksTwo />}
        </IconButton>
      );
    },
  ],
  [
    '卷轴模式',
    () => {
      const enabled = useStore((state) => state.option.scrollMode);

      const handleClick = useCallback(() => {
        useStore.setState((state) => {
          state.option.scrollMode = !state.option.scrollMode;
          state.option.onePageMode = state.option.scrollMode;
          state.img.updatePageData.sync(state);
          setTimeout(state.scrollbar.handleMangaFlowScroll);
        });
      }, []);

      return (
        <IconButton tip="卷轴模式" enabled={enabled} onClick={handleClick}>
          <MdViewDay />
        </IconButton>
      );
    },
  ],
  [
    '页面填充',
    () => {
      const enabled = useStore(
        (state) => state.fillEffect.get(state.nowFillIndex)!,
      );
      const isOnePageMode = useStore((state) => state.option.onePageMode);

      const handleClick = useStore((state) => state.img.switchFillEffect);

      return (
        <IconButton
          tip="页面填充"
          enabled={enabled}
          hidden={isOnePageMode}
          onClick={handleClick}
        >
          <MdQueue />
        </IconButton>
      );
    },
  ],
  buttonListDivider,
  [
    '放大模式',
    () => {
      const enabled = useStore((state) => state.isZoomed);

      const handleClick = useCallback(() => {
        useStore.setState((state) => {
          state.panzoom?.zoomTo(0, 0, 1.2);
        });
      }, []);

      return (
        <IconButton tip="放大模式" enabled={enabled} onClick={handleClick}>
          <MdSearch />
        </IconButton>
      );
    },
  ],
  [
    '设置',
    ({ onMouseLeave }) => {
      const [showPanel, setShowPanel] = useState(false);

      const handleClick = useCallback(() => {
        useStore.setState((state) => {
          state.showToolbar = !showPanel;
        });
        setShowPanel(!showPanel);
      }, [showPanel]);

      const popper = useMemo(
        () => (
          <>
            <SettingPanel />
            <div
              className={classes.closeCover}
              onClick={() => {
                handleClick();
                onMouseLeave();
              }}
              role="button"
              tabIndex={-1}
              aria-label="关闭设置弹窗的遮罩"
            />
          </>
        ),
        [handleClick, onMouseLeave],
      );

      return (
        <IconButton
          tip="设置"
          enabled={showPanel}
          showTip={showPanel}
          onClick={handleClick}
          popperClassName={showPanel && classes.SettingPanelPopper}
          popper={showPanel && popper}
        >
          <MdSettings />
        </IconButton>
      );
    },
  ],
];
