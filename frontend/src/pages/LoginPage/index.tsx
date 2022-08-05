import React from 'react'

import './style.scss'
import { LoginFormComponent } from '../../components/LoginFormComponent'
import { HEADERS } from '../../constants/headers'
import { LABEL } from '../../constants/labels'
import { ROUTES } from '../../constants/routes'

export const LoginPage = () => {
  return (
    <div className={'loginContainer'}>
      <LoginFormComponent
        title={HEADERS.LOGIN}
        buttonLabel={LABEL.LOGIN}
        linkLabel={LABEL.SIGN_IN}
        linkRoute={ROUTES.REGISTRATION}
      />
    </div>
  )
}
