import { combineReducers } from 'redux'

import { authSlice } from './auth'

// @ts-ignore
export const rootReducer = combineReducers({ auth: authSlice.reducer })
