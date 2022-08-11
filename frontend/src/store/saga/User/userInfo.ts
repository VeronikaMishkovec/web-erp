import { call, put, takeLatest } from 'redux-saga/effects'

import { UserInfoRequestType } from '../../../api/requests/types'
import { getUserInfoRequest } from '../../../api/requests/user'
import { UserResponse } from '../../../types/AuthResponse'
import * as action from '../../reducer/user'

function* userInfoSagaWorker({ id }: UserInfoRequestType) {
  try {
    const res: UserResponse = yield call(getUserInfoRequest, { id })
    yield put(action.userInfoSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* userInfoSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.userInfoRequestAction, userInfoSagaWorker)
}
