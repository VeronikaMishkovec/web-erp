import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
  isLogin: boolean
  userId: number
}

// Define the initial state using that type
const initialState: AuthState = {
  isLogin: false,
  userId: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registrationRequestAction: (state, action) => {},
    registrationSuccessAction: (state, action: PayloadAction<any>) => {
      // state.userId = action.payload.userId
    },
  },
})

export const { registrationRequestAction, registrationSuccessAction } =
  authSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer
