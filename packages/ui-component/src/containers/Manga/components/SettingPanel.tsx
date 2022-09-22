import clsx from 'clsx';
import { Fragment, memo, useMemo } from 'react';
import { useStore } from '../hooks/useStore';

import { defaultSettingList } from '../defaultSettingList';

import classes from '../index.module.css';

/** 菜单面板 */
export const SettingPanel: React.FC = memo(() => {
  const editSettingList = useStore((state) => state.editSettingList);
  const settingList = useMemo(
    () => editSettingList(defaultSettingList),
    [editSettingList],
  );

  return (
    <div
      className={clsx(classes.toolbarButtonPopper, classes.SettingPanelPopper)}
    >
      <div className={classes.SettingPanel}>
        {settingList.map(([key, SettingItem], i) => (
          <Fragment key={key}>
            {i ? <hr /> : undefined}
            <div className={classes.SettingBlock}>
              <div className={classes.SettingBlockSubtitle}>{key}</div>
              <SettingItem />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
});
