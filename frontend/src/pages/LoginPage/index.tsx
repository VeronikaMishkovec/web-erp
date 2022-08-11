import React, { ChangeEvent, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { LoginFormComponent } from '../../components/LoginFormComponent'
import { HEADERS } from '../../constants/headers'
import { LABEL } from '../../constants/labels'
import { ROUTES } from '../../constants/routes'
import { loginRequestAction } from '../../store/reducer/auth'
import { useAppDispatch } from '../../store/reduxHooks'
import './style.scss'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('refreshToken')

  const handleChangeEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setEmail(e.target.value)
  const handleChangePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPassword(e.target.value)

  const handleLogin = () => {
    return dispatch(loginRequestAction({ email, password }))
  }

  useEffect(() => {
    !!token && navigate(ROUTES.MAIN)
  }, [token])

  return (
    <div className={'loginContainer'}>
      <LoginFormComponent
        title={HEADERS.LOGIN}
        buttonLabel={LABEL.LOGIN}
        linkLabel={LABEL.SIGN_IN}
        linkRoute={ROUTES.REGISTRATION}
        email={email}
        password={password}
        onChangePassword={handleChangePassword}
        onChangeEmail={handleChangeEmail}
        onClickAuth={handleLogin}
      />
    </div>
  )
}
