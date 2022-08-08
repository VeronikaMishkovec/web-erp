import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthType } from '../types/AuthType'

import {
  LoginPayloadType,
  RegistrationPayloadType,
} from './types/AuthPayloadType'

const initialState: AuthType = {
  userId: '',
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    registrationRequestAction: (state, action) => {},
    registrationSuccessAction: (
      state,
      action: PayloadAction<RegistrationPayloadType>,
    ) => {
      state.userId = action.payload.data.id
    },

    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    loginRequestAction: (state, action) => {},
    loginSuccessAction: (state, action: PayloadAction<LoginPayloadType>) => {
      state.userId = action.payload.data.id
      state.token = action.payload.data.token
    },
  },
})

export const {
  registrationRequestAction,
  registrationSuccessAction,
  loginRequestAction,
  loginSuccessAction,
} = authSlice.actions

export default authSlice.reducer
