import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ProjectsType } from '../../types/ProjectsResponse'

const initialState: ProjectsType = {
  isCreatedSuccessfully: false,
  project: {
    closed_date: '',
    created_date: '',
    name: '',
    status: '',
    used_id: '',
  },
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    newProjectRequestAction: (state, action) => {},
    newProjectSuccessAction: (state, action: PayloadAction<ProjectsType>) => {
      state.project = action.payload.project
      state.isCreatedSuccessfully = true
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    allProjectsRequestAction: (state, action) => {},
    allProjectsSuccessAction: (state, action: PayloadAction<ProjectsType>) => {
      state.project = action.payload.project
    },
  },
})

export const { newProjectRequestAction, newProjectSuccessAction } =
  projectSlice.actions

export default projectSlice.reducer
