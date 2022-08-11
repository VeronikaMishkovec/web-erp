import { all } from 'redux-saga/effects'

import checkAuthSagaWatcher from './Auth/checkAuth'
import loginSagaWatcher from './Auth/login'
import registrationSagaWatcher from './Auth/registration'
import userInfoSagaWatcher from './User/userInfo'

export default function* rootSaga() {
  yield all([
    checkAuthSagaWatcher(),
    loginSagaWatcher(),
    registrationSagaWatcher(),
    userInfoSagaWatcher(),
  ])
}
