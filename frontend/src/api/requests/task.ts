import api, { METHOD_POST } from '..'
import { API } from '../../constants/api'

import { AllTasksRequestType } from './types'

export const getAllTasksRequest = ({ project_id }: AllTasksRequestType) => {
  return api(API.ALL_TASKS, METHOD_POST, { project_id }, 'tasks list')
}
