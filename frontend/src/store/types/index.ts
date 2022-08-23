import { IUser } from '../../types/IUser'
import { ProjectsType } from '../../types/ProjectsResponse'
import { TaskType } from '../../types/TaskResponse'

export type MainType = {
  auth: { isLogin: boolean; refreshToken: string; user: IUser }
  project: ProjectsType
  task: { tasks_list: any }
  user: { user: IUser }
}
