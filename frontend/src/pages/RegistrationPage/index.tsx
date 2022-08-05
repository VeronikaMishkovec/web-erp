import React from 'react'

import './style.scss'
import { LoginFormComponent } from '../../components/LoginFormComponent'
import { HEADERS } from '../../constants/headers'
import { LABEL } from '../../constants/labels'
import { ROUTES } from '../../constants/routes'

export const RegistrationPage = () => {
  return (
    <div className={'registrationContainer'}>
      <LoginFormComponent
        title={HEADERS.REGISTRATION}
        buttonLabel={LABEL.SIGN_IN}
        linkLabel={LABEL.LOGIN}
        linkRoute={ROUTES.LOGIN}
      />
    </div>
  )
}
