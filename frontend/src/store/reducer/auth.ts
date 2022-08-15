import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthResponse } from '../../types/AuthResponse'

const initialState: AuthResponse = {
  isLogin: false,
  accessToken: '',
  refreshToken: '',
  user: {
    id: '',
    email: '',
    project_list: [],
    is_current_project: false,
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    registrationRequestAction: (state, action) => {},
    registrationSuccessAction: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload.user
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    loginRequestAction: (state, action) => {},
    loginSuccessAction: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload.user
      state.isLogin = true
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    checkAuthRequestAction: (state, action) => {},
    checkAuthSuccessAction: (state, action: PayloadAction<AuthResponse>) => {
      state.refreshToken = action.payload.refreshToken
      state.user = action.payload.user
      state.isLogin = true
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logoutRequestAction: (state, action) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logoutSuccessAction: (state, action: PayloadAction<AuthResponse>) => {
      state.isLogin = false
    },
  },
})

export const {
  registrationRequestAction,
  registrationSuccessAction,
  loginRequestAction,
  loginSuccessAction,
  checkAuthRequestAction,
  checkAuthSuccessAction,
  logoutRequestAction,
  logoutSuccessAction,
} = authSlice.actions

export default authSlice.reducer
