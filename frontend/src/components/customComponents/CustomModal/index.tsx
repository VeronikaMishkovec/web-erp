import React from 'react'

import { Modal } from '@mui/material'

import { CustomModalTypes } from './types'

import './styles.scss'

export const CustomModal = ({
  children,
  modelHeader,
  onCloseModal,
  open,
}: CustomModalTypes) => {
  return (
    <Modal open={open} onClose={onCloseModal} className={'modal'}>
      <div className={'modalContainer'}>
        <div className={'modelHeader'}>{modelHeader}</div>
        <div className={'modelContent'}>{children}</div>
      </div>
    </Modal>
  )
}
