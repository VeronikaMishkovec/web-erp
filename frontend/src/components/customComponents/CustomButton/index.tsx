import React from 'react'

import { Button } from '@mui/material'

import { CustomButtonType } from './types'

import './styles.scss'

export const CustomButton = ({ label, submit, onClick }: CustomButtonType) => {
  return (
    <Button
      variant='contained'
      className={submit ? 'submitButton' : 'cancelButton'}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}
