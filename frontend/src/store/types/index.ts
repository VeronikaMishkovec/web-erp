import { IUser } from '../../types/IUser'

export type MainType = {
  auth: { isLogin: boolean; refreshToken: string; user: IUser }
  user: { user: IUser }
}
