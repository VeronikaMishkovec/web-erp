import { all } from 'redux-saga/effects'

import checkAuthSagaWatcher from './Auth/checkAuth'
import loginSagaWatcher from './Auth/login'
import registrationSagaWatcher from './Auth/registration'

export default function* rootSaga() {
  yield all([
    registrationSagaWatcher(),
    loginSagaWatcher(),
    checkAuthSagaWatcher(),
  ])
}
