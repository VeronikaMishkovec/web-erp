import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserResponse } from '../../types/AuthResponse'

const initialState: UserResponse = {
  user: { email: '', id: '', project_list: [] },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    userInfoRequestAction: (state, action) => {},
    userInfoSuccessAction: (state, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.user.email
      state.user.project_list = action.payload.user.project_list
    },
  },
})

export const { userInfoRequestAction, userInfoSuccessAction } =
  userSlice.actions

export default userSlice.reducer
