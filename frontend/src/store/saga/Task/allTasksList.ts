import { call, put, takeLatest } from 'redux-saga/effects'

import { getAllTasksRequest } from '../../../api/requests/task'
import { AllTasksRequestType } from '../../../api/requests/types'
import { TaskResponse } from '../../../types/TaskResponse'
import * as action from '../../reducer/tasks'

interface PayloadType {
  payload: AllTasksRequestType
}

function* allTasksSagaWorker({ payload }: PayloadType) {
  try {
    const res: TaskResponse = yield call(getAllTasksRequest, {
      ...payload,
    })
    yield put(action.allTasksSuccessAction(res))
  } catch (error) {
    console.log(error)
  }
}

export default function* allTasksSagaWatcher() {
  // @ts-ignore
  yield takeLatest(action.allTasksRequestAction, allTasksSagaWorker)
}
