import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthResponse } from '../../types/AuthResponse'

const initialState: AuthResponse = {
  accessToken: '',
  refreshToken: '',
  user: {
    id: '',
    email: '',
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
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    checkAuthRequestAction: (state, action) => {},
    checkAuthSuccessAction: (state, action: PayloadAction<AuthResponse>) => {
      state.refreshToken = action.payload.refreshToken
      state.user = action.payload.user
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
} = authSlice.actions

export default authSlice.reducer
