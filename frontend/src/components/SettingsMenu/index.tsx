import React from 'react'

import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'

import { COLORS } from '../../constants/colors'
import { HEADERS } from '../../constants/headers'
import { LABEL } from '../../constants/labels'
import { SettingsMenuItem } from '../SettingsMenuItem'

import { SettingsMenuTypes } from './types'

import './styles.scss'

export const SettingsMenu = ({
  onLogoutClick,
  onAddNewClick,
}: SettingsMenuTypes) => {
  return (
    <div className={'settingsContainer'}>
      <div className={'settingsHeader'}>{HEADERS.SETTING}</div>
      <SettingsMenuItem
        icon={<AddIcon sx={{ color: COLORS.TEAL }} />}
        onItemClick={onAddNewClick}
        title={LABEL.ADD_NEW_PROJECT}
      />
      <SettingsMenuItem
        icon={<LogoutIcon sx={{ color: COLORS.TEAL }} />}
        onItemClick={onLogoutClick}
        title={LABEL.LOGOUT}
      />
    </div>
  )
}
