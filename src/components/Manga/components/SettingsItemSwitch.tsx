import type { Component } from 'solid-js';

import classes from '../index.module.css';

import { SettingsItem } from './SettingsItem';

export interface SettingsItemSwitchProps {
  name: string;
  value: boolean;
  class?: string;
  classList?: ClassList;

  onChange: (val: boolean) => void;
}

/** 开关式菜单项 */
export const SettingsItemSwitch: Component<SettingsItemSwitchProps> = (
  props,
) => {
  const handleClick = () => props.onChange(!props.value);

  return (
    <SettingsItem
      name={props.name}
      class={props.class}
      classList={props.classList}
    >
      <button
        class={classes.SettingsItemSwitch}
        type="button"
        on:click={handleClick}
        data-checked={props.value}
      >
        <div class={classes.SettingsItemSwitchRound} />
      </button>
    </SettingsItem>
  );
};
