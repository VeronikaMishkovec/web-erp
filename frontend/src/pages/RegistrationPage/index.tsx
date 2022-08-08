import React, { ChangeEvent, useState } from 'react'

import { useDispatch } from 'react-redux'

import { LoginFormComponent } from '../../components/LoginFormComponent'
import { HEADERS } from '../../constants/headers'
import { LABEL } from '../../constants/labels'
import { ROUTES } from '../../constants/routes'
import { registrationRequestAction } from '../../store/reducer/auth'

import './style.scss'

export const RegistrationPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleChangeEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setEmail(e.target.value)
  const handleChangePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPassword(e.target.value)
  const handleSignin = () =>
    dispatch(registrationRequestAction({ email, password }))

  return (
    <div className={'registrationContainer'}>
      <LoginFormComponent
        title={HEADERS.REGISTRATION}
        buttonLabel={LABEL.SIGN_IN}
        linkLabel={LABEL.LOGIN}
        linkRoute={ROUTES.LOGIN}
        email={email}
        password={password}
        onChangeEmail={handleChangeEmail}
        onChangePassword={handleChangePassword}
        onClickAuth={handleSignin}
      />
    </div>
  )
}
