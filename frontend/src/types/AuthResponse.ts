import { IUser } from './IUser'

export interface AuthResponse {
  accessToken: string
  isLogin: boolean
  refreshToken: string

  user: IUser
}

export interface UserResponse {
  user: IUser
}
