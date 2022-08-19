export interface Project {
  closed_date: string
  created_date: string
  name: string
  status: string
  used_id: string
}

export interface ProjectsType {
  isCreatedSuccessfully: boolean
  project: Project
  projects_list?: Project[]
}
