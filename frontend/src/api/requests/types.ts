export type RequestParams = {
  email: string
  password: string
}

export interface CheckAuthRequestType {
  token: string
}

export interface UserInfoRequestType {
  id: string
}

export interface NewProjectRequestType {
  email: string
  name: string
}

export interface AllProjectsRequestType {
  user_id: string
}
