import { call, put, takeLatest } from 'redux-saga/effects'

import { registrationRequest } from '../../../api/requests/auth'
import { RequsetParams } from '../../../api/requests/types'
import * as action from '../../reducer/auth'

// type PayloadType = Pick<RequsetParams, 'email' | 'password'>

function* registrationSagaWorker({ payload }: any) {
  console.log(payload)
  try {
    const res: ResponseType = yield call(registrationRequest, payload)
    yield put(action.registrationSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* registrationSagaWatcher() {
  yield takeLatest(action.registrationRequestAction, registrationSagaWorker)
}
