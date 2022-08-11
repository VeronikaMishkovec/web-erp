import React, { ReactNode, useEffect, useState } from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  // const userEmail = useAppSelector((state: MainType) => state.user.user.email)

  const init = () => {
    try {
      const token = localStorage.getItem('refreshToken')
      console.log(token)
      dispatch(checkAuthRequestAction({ token }))
      return true
    } catch (e) {
      return false
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('refreshToken')
    dispatch(checkAuthRequestAction({ token }))
  }, [])

  useEffect(() => {
    if (!init()) {
      navigate(ROUTES.LOGIN)
    }
  }, [])

  const userId = useAppSelector((state: MainType) => state)

  useEffect(() => {
    console.log('@@@', userId)
    // dispatch(userInfoRequestAction({ userId }))
  }, [userId])

  return (
    <div>
      <header className={'headerContainer'}>
        <div className={'userContainer'}>
          <AccountCircleIcon sx={{ color: COLORS.TEAL }} />
          {/* <div className={'userEmail'}>{userEmail}</div> */}
        </div>
      </header>
      {children}
    </div>
  )
}
