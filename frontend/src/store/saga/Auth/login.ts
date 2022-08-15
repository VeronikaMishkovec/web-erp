import { call, put, takeLatest } from 'redux-saga/effects'

import { loginRequest } from '../../../api/requests/auth'
import { RequestParams } from '../../../api/requests/types'
import { AuthResponse } from '../../../types/AuthResponse'
import * as action from '../../reducer/auth'

type PayloadType = { payload: Pick<RequestParams, 'email' | 'password'> }

function* loginSagaWorker({ payload }: PayloadType) {
  try {
    const res: AuthResponse = yield call(loginRequest, payload)
    yield put(action.loginSuccessAction(res))
    localStorage.setItem('refreshToken', res.refreshToken)
  } catch (error) {
    console.log(error)
  }
}

export default function* loginSagaWatcher() {
  yield takeLatest(action.loginRequestAction, loginSagaWorker)
}
