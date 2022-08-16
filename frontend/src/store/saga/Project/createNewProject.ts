import { call, put, takeLatest } from 'redux-saga/effects'

import { createNewProjectRequest } from '../../../api/requests/projects'
import { NewProjectRequestType } from '../../../api/requests/types'
import { ProjectsType } from '../../../types/ProjectsResponse'
import * as action from '../../reducer/projects'

interface PayloadType {
  payload: NewProjectRequestType
}

function* createNewProjectSagaWorker({ payload }: PayloadType) {
  try {
    const res: ProjectsType = yield call(createNewProjectRequest, {
      ...payload,
    })
    yield put(action.newProjectSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* createNewProjectSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.newProjectRequestAction, createNewProjectSagaWorker)
}
