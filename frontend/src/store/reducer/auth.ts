import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthType } from '../types/AuthType'

import { AuthPayloadType } from './types/AuthPayloadType'

const initialState: AuthType = {
  userId: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    registrationRequestAction: (state, action) => {},
    registrationSuccessAction: (
      state,
      action: PayloadAction<AuthPayloadType>,
    ) => {
      state.userId = action.payload.data.id
    },
  },
})

export const { registrationRequestAction, registrationSuccessAction } =
  authSlice.actions

export default authSlice.reducer
