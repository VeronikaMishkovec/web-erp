import React, { useState } from 'react'

import { LABEL } from '../../../constants/labels'
import { CustomButton } from '../../customComponents/CustomButton'
import { CustomInput } from '../../customComponents/CustomInput'
import { CustomModal } from '../../customComponents/CustomModal'

import { AddnewProjectModalType } from './types'

import './styles.scss'

export const AddNewProjectModal = ({
  open,
  onCloseModal,
  onClickCancel,
}: AddnewProjectModalType) => {
  const [projectName, setProjectName] = useState('')

  return (
    <CustomModal
      open={open}
      onCloseModal={onCloseModal}
      modelHeader={LABEL.ADD_NEW_PROJECT}
    >
      <CustomInput
        className={projectName === '' ? 'emptyInput' : 'notEmptyInput'}
        label={LABEL.PROJECT_NAME}
        onChange={(e) => setProjectName(e.target.value)}
        value={projectName}
      />
      <div className={'buttonContainer'}>
        <CustomButton
          label={LABEL.CANCEL}
          submit={false}
          onClick={onClickCancel}
        />
        <CustomButton label={LABEL.CREATE} submit={true} onClick={() => 1} />
      </div>
    </CustomModal>
  )
}