import { IUser } from '../../types/IUser'
import { ProjectsType } from '../../types/ProjectsResponse'

export type MainType = {
  auth: { isLogin: boolean; refreshToken: string; user: IUser }
  project: ProjectsType
  user: { user: IUser }
}
