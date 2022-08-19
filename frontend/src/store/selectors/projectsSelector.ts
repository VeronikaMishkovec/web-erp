import { MainType } from '../types'

export const projectsListSelector = (state: MainType) =>
  state.project.projects_list
