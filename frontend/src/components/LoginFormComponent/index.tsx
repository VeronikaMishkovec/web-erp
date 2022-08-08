import React, { ChangeEvent, useState } from 'react'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { LABEL } from '../../constants/labels'
import { CustomInput } from '../customComponents/CustomInput'

import { LoginFormType } from './types'

import './style.scss'

export const LoginFormComponent = ({
  buttonLabel,
  title,
  linkLabel,
  linkRoute,
  email,
  password,
  onChangeEmail,
  onChangePassword,
  onClickAuth,
}: LoginFormType) => {
  const [showPassword, setShowPassword] = useState(false)

  const IS_EMPTY_EMAIL = email === '' ? 'signinInput' : 'notEmptySignInput'
  const IS_EMPTY_PASSWORD =
    password === '' ? 'signinInput' : 'notEmptySignInput'

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
        onChange={onChangeEmail}
        value={email}
      />
      <CustomInput
        className={IS_EMPTY_PASSWORD}
        label={LABEL.PASSWORD}
        onChange={onChangePassword}
        value={password}
        type={showPassword ? 'text' : 'password'}
        rightIcon={PasswordIcon}
      />
      <Button
        variant='contained'
        className={'signinButton'}
        onClick={onClickAuth}
      >
        {buttonLabel}
      </Button>
      <Link to={linkRoute} className={'loginLink'}>
        {linkLabel}
      </Link>
    </div>
  )
}
