import { combineReducers } from 'redux'

import { authSlice } from './auth'
import { userSlice } from './user'

// @ts-ignore
export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
})
