import api, { METHOD_GET, METHOD_POST } from '../../api/index'
import { API } from '../../constants/api'

import { CheckAuthRequestType, RequestParams } from './types'

export const registrationRequest = ({ email, password }: RequestParams) => {
  return api(API.SIGN_IN, METHOD_POST, { email, password }, 'registration')
}

export const loginRequest = ({ email, password }: RequestParams) => {
  return api(API.LOGIN, METHOD_POST, { email, password }, 'login')
}

export const checkAuthRequest = ({ token }: CheckAuthRequestType) => {
  return api(API.REFRESH, METHOD_GET, { token }, 'refresh')
}
