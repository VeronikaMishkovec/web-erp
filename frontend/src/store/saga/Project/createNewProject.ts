import { call, put, takeLatest } from 'redux-saga/effects'

import { createNewProjectRequest } from '../../../api/requests/projects'
import { NewProjectRequestType } from '../../../api/requests/types'
import { ProjectsType } from '../../../types/ProjectsResponse'
import * as action from '../../reducer/projects'

function* createNewProjectSagaWorker({ name, email }: NewProjectRequestType) {
  try {
    const res: ProjectsType = yield call(createNewProjectRequest, {
      name,
      email,
    })
    yield put(action.newProjectSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* createNewProjectSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.newProjectRequestAction(), createNewProjectSagaWorker)
}
