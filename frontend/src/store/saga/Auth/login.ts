import { call, put, takeLatest } from 'redux-saga/effects'

import { loginRequest } from '../../../api/requests/auth'
import { RequsetParams } from '../../../api/requests/types'
import * as action from '../../reducer/auth'
import { LoginPayloadType } from '../../reducer/types/AuthPayloadType'

type PayloadType = { payload: Pick<RequsetParams, 'email' | 'password'> }

function* loginSagaWorker({ payload }: PayloadType) {
  try {
    const res: LoginPayloadType = yield call(loginRequest, payload)
    yield put(action.loginSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* loginSagaWatcher() {
  yield takeLatest(action.loginRequestAction, loginSagaWorker)
}
