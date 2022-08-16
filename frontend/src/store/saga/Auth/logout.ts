import { call, put, takeLatest } from 'redux-saga/effects'

import { logoutRequest } from '../../../api/requests/auth'
import { CheckAuthRequestType } from '../../../api/requests/types'
import { AuthResponse } from '../../../types/AuthResponse'
import * as action from '../../reducer/auth'

function* logoutSagaWorker({ token }: CheckAuthRequestType) {
  try {
    const res: AuthResponse = yield call(logoutRequest, { token })
    yield put(action.logoutSuccessAction(res))
    localStorage.removeItem('refreshToken')
  } catch (error) {
    console.log(error)
  }
}

export default function* logoutSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.logoutRequestAction, logoutSagaWorker)
}
