import { call, put, takeLatest } from 'redux-saga/effects'

import { getAllProjectsRequest } from '../../../api/requests/projects'
import { AllProjectsRequestType } from '../../../api/requests/types'
import { ProjectsType } from '../../../types/ProjectsResponse'
import * as action from '../../reducer/projects'

interface PayloadType {
  payload: AllProjectsRequestType
}

function* allProjectsSagaWorker({ payload }: PayloadType) {
  try {
    const res: ProjectsType = yield call(getAllProjectsRequest, {
      ...payload,
    })
    yield put(action.allProjectsSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* allProjectsSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.allProjectsRequestAction, allProjectsSagaWorker)
}
