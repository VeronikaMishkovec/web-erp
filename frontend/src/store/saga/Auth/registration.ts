import { call, put, takeLatest } from 'redux-saga/effects'

import { registrationRequest } from '../../../api/requests/auth'
import { RequestParams } from '../../../api/requests/types'
import { AuthResponse } from '../../../types/AuthResponse'
import * as action from '../../reducer/auth'

type PayloadType = { payload: Pick<RequestParams, 'email' | 'password'> }

function* registrationSagaWorker({ payload }: PayloadType) {
  try {
    const res: AuthResponse = yield call(registrationRequest, payload)
    yield put(action.registrationSuccessAction(res))
    console.log(res)
    localStorage.setItem('accessToken', res.accessToken)
    localStorage.setItem('refreshToken', res.refreshToken)
  } catch (error) {
    console.log(error)
  }
}

export default function* registrationSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.registrationRequestAction, registrationSagaWorker)
}
