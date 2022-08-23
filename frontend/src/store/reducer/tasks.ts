import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TaskResponse } from '../../types/TaskResponse'

const initialState: TaskResponse = {
  tasks_list: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    allTasksRequestAction: (state, action) => {},
    allTasksSuccessAction: (state, action: PayloadAction<TaskResponse>) => {
      // @ts-ignore
      state.tasks_list = action.payload
    },
  },
})

export const { allTasksRequestAction, allTasksSuccessAction } =
  taskSlice.actions

export default taskSlice.reducer
