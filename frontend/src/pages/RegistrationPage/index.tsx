import React from 'react'

import './style.scss'
import { LoginFormComponent } from '../../components/LoginFormComponent'
import { HEADERS } from '../../constants/headers'

export const RegistrationPage = () => {
  return (
    <div className={'registrationContainer'}>
      <LoginFormComponent title={HEADERS.REGISTRATION} />
    </div>
  )
}
