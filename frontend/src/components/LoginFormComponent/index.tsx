import React, { ChangeEvent, useState } from 'react'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { LABEL } from '../../constants/labels'
import { LoginFormType } from '../../pages/RegistrationPage/types'
import { CustomInput } from '../customComponents/CustomInput'
import './style.scss'

export const LoginFormComponent = ({
  buttonLabel,
  title,
  linkLabel,
  linkRoute,
}: LoginFormType) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const IS_EMPTY_EMAIL = email === '' ? 'signinInput' : 'notEmptySignInput'
  const IS_EMPTY_PASSWORD =
    password === '' ? 'signinInput' : 'notEmptySignInput'

  const handleChangeEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setEmail(e.target.value)
  const handleChangePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setPassword(e.target.value)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const PasswordIcon = (
    <div onClick={handleShowPassword} className={'inputIcon'}>
      {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
    </div>
  )

  return (
    <div className={'formContainer'}>
      <div className={'formTitle'}>{title}</div>
      <CustomInput
        className={IS_EMPTY_EMAIL}
        label={LABEL.EMAIL}
        onChange={handleChangeEmail}
        value={email}
      />
      <CustomInput
        className={IS_EMPTY_PASSWORD}
        label={LABEL.PASSWORD}
        onChange={handleChangePassword}
        value={password}
        type={showPassword ? 'text' : 'password'}
        rightIcon={PasswordIcon}
      />
      <Button variant='contained' className={'signinButton'}>
        {buttonLabel}
      </Button>
      <Link to={linkRoute} className={'loginLink'}>
        {linkLabel}
      </Link>
    </div>
  )
}
