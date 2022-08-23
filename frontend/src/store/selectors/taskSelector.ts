import { MainType } from '../types'

export const tasksListSelector = (state: MainType) => state.task.tasks_list
