import { combineReducers } from 'redux'

import { authSlice } from './auth'
import { projectSlice } from './projects'
import { userSlice } from './user'

// @ts-ignore
export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  project: projectSlice.reducer,
  user: userSlice.reducer,
})
