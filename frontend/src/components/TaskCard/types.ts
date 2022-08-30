export interface TaskCardTypes {
  id: string
  isCurrentTask: boolean
  name: string
  onCloseTask?: (value: any) => void
  onDragEnd: (value: any) => void
  taskColor: 'defaultTask'
  title: string
}
