import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'

import { COLORS } from '../../constants/colors'

import { SettingsMenuTypes } from './types'
import './styles.scss'

export const SettingsMenu = ({ onLogoutClick }: SettingsMenuTypes) => {
  return (
    <div className={'settingsContainer'}>
      <div className={'settingsHeader'}>{'Settings'}</div>
      <div className={'logout'} onClick={onLogoutClick}>
        <LogoutIcon sx={{ color: COLORS.TEAL }} />
        <div className={'title'}>{'Logout'}</div>
      </div>
    </div>
  )
}
