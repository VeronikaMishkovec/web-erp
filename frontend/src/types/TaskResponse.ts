export interface TaskResponse {
  tasks_list: TaskType[]
}

export interface TaskType {
  _id: string
  name: string
  project_id: string
  timing: TimingType[]
  title: string
}

interface TimingType {
  end_time: string
  start_time: string
}
