import { call, put, takeLatest } from 'redux-saga/effects'

import { registrationRequest } from '../../../api/requests/auth'
import { RequsetParams } from '../../../api/requests/types'
import * as action from '../../reducer/auth'
import { RegistrationPayloadType } from '../../reducer/types/AuthPayloadType'

type PayloadType = { payload: Pick<RequsetParams, 'email' | 'password'> }

function* registrationSagaWorker({ payload }: PayloadType) {
  try {
    const res: RegistrationPayloadType = yield call(
      registrationRequest,
      payload,
    )
    yield put(action.registrationSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* registrationSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.registrationRequestAction, registrationSagaWorker)
}
