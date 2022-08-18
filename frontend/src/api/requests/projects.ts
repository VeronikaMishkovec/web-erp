import api, { METHOD_GET, METHOD_POST } from '..'
import { API } from '../../constants/api'

import { AllProjectsRequestType, NewProjectRequestType } from './types'

export const createNewProjectRequest = ({
  name,
  email,
}: NewProjectRequestType) => {
  return api(
    API.CREATE_NEW_PROJECT,
    METHOD_POST,
    { name, email },
    'create new project',
  )
}

export const getAllProjectsRequest = ({ user_id }: AllProjectsRequestType) => {
  return api(API.ALL_PROJECTS, METHOD_GET, { user_id }, 'projects list')
}
