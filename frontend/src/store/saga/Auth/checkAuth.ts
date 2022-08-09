import { call, put, takeLatest } from 'redux-saga/effects'

import { checkAuthRequest } from '../../../api/requests/auth'
import { CheckAuthRequestType } from '../../../api/requests/types'
import { AuthResponse } from '../../../types/AuthResponse'
import * as action from '../../reducer/auth'

function* checkAuthSagaWorker({ token }: CheckAuthRequestType) {
  try {
    const res: AuthResponse = yield call(checkAuthRequest, { token })
    yield put(action.checkAuthSuccessAction(res))
    localStorage.setItem('refreshToken', res.refreshToken)
  } catch (error) {
    console.log(error)
  }
}

export default function* checkAuthSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.checkAuthRequestAction, checkAuthSagaWorker)
}
