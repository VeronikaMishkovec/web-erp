import { all } from 'redux-saga/effects'

import registrationSagaWatcher from './Auth/auth'

export default function* rootSaga() {
  yield all([registrationSagaWatcher()])
}
