import React, { ReactNode, useEffect, useState } from 'react'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { AddNewProjectModal } from '../components/Modals/AddNewProjectModal'
import { SettingsMenu } from '../components/SettingsMenu'
import { COLORS } from '../constants/colors'
import { ROUTES } from '../constants/routes'
import {
  checkAuthRequestAction,
  logoutRequestAction,
} from '../store/reducer/auth'
import { userInfoRequestAction } from '../store/reducer/user'
import { useAppDispatch, useAppSelector } from '../store/reduxHooks'
import { MainType } from '../store/types'

import './styles.scss'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [showSettings, setShowSettings] = useState(false)
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const userEmail = useAppSelector((state: MainType) => state.auth.user.email)
  const userId = useAppSelector((state: MainType) => state.auth.user.id)
  const isCurrentProject = useAppSelector(
    (state: MainType) => state.user.user.project_list,
  )

  const isLogin = useAppSelector((state: MainType) => state.auth.isLogin)

  const isProjectCreated = useAppSelector(
    (state: MainType) => state.project.isCreatedSuccessfully,
  )

  const token = localStorage.getItem('refreshToken')

  useEffect(() => {
    dispatch(checkAuthRequestAction({ token }))
  }, [])

  useEffect(() => {
    dispatch(userInfoRequestAction({ userId }))
  }, [userId])
  // @ts-ignore
  useEffect(() => {
    if (!isLogin && !token) {
      navigate(ROUTES.LOGIN)
    }
  }, [isLogin])

  useEffect(() => {
    isProjectCreated && setShowNewProjectModal(false)
  }, [isProjectCreated])

  const handleShowSettings = () => setShowSettings(!showSettings)

  const handleLogout = () => {
    dispatch(logoutRequestAction({ token }))
  }

  return (
    <>
      <header className={'headerContainer'}>
        <div className={'userContainer'}>
          <Link to={ROUTES.PROFILE} className={'link'}>
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
        <div className={'iconsContainer'} onClick={handleShowSettings}>
          <SettingsIcon sx={{ color: COLORS.TEAL }} className={'link'} />
        </div>
      </header>
      {children}
      {showSettings && (
        <SettingsMenu
          onLogoutClick={handleLogout}
          onAddNewClick={() => {
            setShowNewProjectModal(true)
            setShowSettings(false)
          }}
        />
      )}
      <AddNewProjectModal
        open={showNewProjectModal}
        onCloseModal={() => setShowSettings(false)}
        onClickCancel={() => setShowNewProjectModal(false)}
        userEmail={userEmail}
      />
    </>
  )
}
