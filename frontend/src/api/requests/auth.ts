import api, { METHOD_POST } from '../../api/index'
import { RequsetParams } from '../../api/requests/types'
import { API } from '../../constants/api'

export const registrationRequest = ({ email, password }: RequsetParams) =>
  api(API.SIGN_IN, METHOD_POST, { email, password }, 'registration')
