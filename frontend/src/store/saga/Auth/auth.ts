import { call, put, takeLatest } from 'redux-saga/effects'

import { registrationRequestAction } from '../../reducer/auth'
import * as action from '../../reducer/auth'

function* registrationSagaWorker({ payload }: any) {
  try {
    const res: ResponseType = yield call(registrationRequestAction, payload)
    yield put(action.registrationSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* registrationSagaWatcher() {
  yield takeLatest(action.registrationRequestAction, registrationSagaWorker)
}
