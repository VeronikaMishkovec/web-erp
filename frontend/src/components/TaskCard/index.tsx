import React from 'react'

import { TaskCardTypes } from './types'
import './style.scss'

export const TaskCard = ({ taskColor }: TaskCardTypes) => {
  return <div className={`cardContainer ${taskColor}`}></div>
}
