import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { API } from '../../constants/api'
import { ROUTES } from '../../constants/routes'
import { checkAuthRequestAction } from '../../store/reducer/auth'
import { useAppDispatch } from '../../store/reduxHooks'

export const MainPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const init = () => {
    try {
      const token = localStorage.getItem('refreshToken')
      dispatch(checkAuthRequestAction({ token }))
      return true
    } catch (e) {
      return false
    }
  }

  useEffect(() => {
    if (!init()) {
      navigate(ROUTES.LOGIN)
    }
  }, [localStorage.getItem('refreshToken')])

  return <div>{'MainPage'}</div>
}
