import React, { ReactNode, useEffect } from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { Link } from 'react-router-dom'

import { COLORS } from '../constants/colors'
import { ROUTES } from '../constants/routes'
import { checkAuthRequestAction } from '../store/reducer/auth'
import { userInfoRequestAction } from '../store/reducer/user'
import { useAppDispatch, useAppSelector } from '../store/reduxHooks'
import { MainType } from '../store/types'

import './styles.scss'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state: MainType) => state.auth.user.id)
  const userEmail = useAppSelector((state: MainType) => state.user.user.email)
  const isCurrentProject = useAppSelector(
    (state: MainType) => state.user.user.is_current_project,
  )

  useEffect(() => {
    const token = localStorage.getItem('refreshToken')
    dispatch(checkAuthRequestAction({ token }))
  }, [])

  useEffect(() => {
    dispatch(userInfoRequestAction({ userId }))
  }, [userId])

  return (
    <div>
      <header className={'headerContainer'}>
        <div className={'userContainer'}>
          <Link to={ROUTES.PROFILE} className={'profileLink'}>
            <AccountCircleIcon sx={{ color: COLORS.TEAL }} />
          </Link>
          <div className={'userEmail'}>{userEmail}</div>
        </div>
        <div className={'currentProjectContainer'}>
          {isCurrentProject ? (
            ''
          ) : (
            <>
              <AccessTimeIcon sx={{ color: COLORS.TEAL }} />
              <div className={'currentProject'}>
                {'Waiting for a project...'}
              </div>
            </>
          )}
        </div>
        <div className={'iconsContainer'}>
          <SettingsIcon sx={{ color: COLORS.TEAL }} />
        </div>
      </header>
      {children}
    </div>
  )
}
