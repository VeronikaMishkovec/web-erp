import { all } from 'redux-saga/effects'

import checkAuthSagaWatcher from './Auth/checkAuth'
import loginSagaWatcher from './Auth/login'
import logoutSagaWatcher from './Auth/logout'
import registrationSagaWatcher from './Auth/registration'
import allProjectsSagaWatcher from './Project/allProjects'
import createNewProjectSagaWatcher from './Project/createNewProject'
import allTasksSagaWatcher from './Task/allTasksList'
import userInfoSagaWatcher from './User/userInfo'

export default function* rootSaga() {
  yield all([
    checkAuthSagaWatcher(),
    loginSagaWatcher(),
    logoutSagaWatcher(),
    registrationSagaWatcher(),
    allProjectsSagaWatcher(),
    createNewProjectSagaWatcher(),
    allTasksSagaWatcher(),
    userInfoSagaWatcher(),
  ])
}
