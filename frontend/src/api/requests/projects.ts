import api, { METHOD_POST } from '..'
import { API } from '../../constants/api'

import { NewProjectRequestType } from './types'

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
