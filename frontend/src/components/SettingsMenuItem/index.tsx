import React from 'react'

import { SettingsMenuType } from './types'

import './styles.scss'

export const SettingsMenuItem = ({
  icon,
  onItemClick,
  title,
}: SettingsMenuType) => {
  return (
    <div className={'itemContainer'} onClick={onItemClick}>
      {icon}
      <div className={'title'}>{title}</div>
    </div>
  )
}
