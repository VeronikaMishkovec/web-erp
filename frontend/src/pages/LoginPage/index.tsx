import React, { ChangeEvent, useState } from 'react'

import './style.scss'
import { LoginFormComponent } from '../../components/LoginFormComponent'
import { HEADERS } from '../../constants/headers'
import { LABEL } from '../../constants/labels'
import { ROUTES } from '../../constants/routes'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setEmail(e.target.value)
  const handleChangePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPassword(e.target.value)

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
        onClickAuth={() => console.log('qwer')}
      />
    </div>
  )
}
