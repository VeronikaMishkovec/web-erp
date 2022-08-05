import React from 'react'

import { InputAdornment, styled, TextField } from '@mui/material'

import { COLORS } from '../../../constants/colors'

import { CustomInputType } from './types'

const CustomInputStyled = styled(TextField)({
  '& label.Mui-focused': {
    color: COLORS.TEAL,
    top: 0,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: COLORS.TEAL,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.TEAL,
    },
  },
})

export const CustomInput = ({
  className,
  label,
  value,
  onChange,
  type,
  rightIcon,
}: CustomInputType) => {
  return (
    <CustomInputStyled
      className={className}
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>{rightIcon}</InputAdornment>
        ),
      }}
    />
  )
}
