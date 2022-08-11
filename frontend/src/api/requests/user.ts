import api, { METHOD_GET } from '..'
import { API } from '../../constants/api'

import { UserInfoRequestType } from './types'

export const getUserInfoRequest = ({ id }: UserInfoRequestType) => {
  return api(API.USER_INFO, METHOD_GET, { id }, 'user/info')
}
