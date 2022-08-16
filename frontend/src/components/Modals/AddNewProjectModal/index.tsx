import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { LABEL } from '../../../constants/labels'
import { newProjectRequestAction } from '../../../store/reducer/projects'
import { useAppSelector } from '../../../store/reduxHooks'
import { MainType } from '../../../store/types'
import { CustomButton } from '../../customComponents/CustomButton'
import { CustomInput } from '../../customComponents/CustomInput'
import { CustomModal } from '../../customComponents/CustomModal'

import { AddnewProjectModalType } from './types'

import './styles.scss'

export const AddNewProjectModal = ({
  open,
  onCloseModal,
  onClickCancel,
  userEmail,
}: AddnewProjectModalType) => {
  const [projectName, setProjectName] = useState('')

  const dispatch = useDispatch()

  const handleCreateNewProject = () => {
    dispatch(newProjectRequestAction({ name: projectName, email: userEmail }))
  }

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
        <CustomButton
          label={LABEL.CREATE}
          submit={true}
          onClick={handleCreateNewProject}
        />
      </div>
    </CustomModal>
  )
}
