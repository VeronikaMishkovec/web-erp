import { IUser } from './IUser'

export interface ProjectsType {
  isCreatedSuccessfully: boolean
  project: {
    closed_date: string
    created_date: string
    is_closed: boolean
    is_current: boolean
    name: string
    users: IUser[]
  }
}
