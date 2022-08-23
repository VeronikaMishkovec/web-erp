import React from 'react'

import { TaskCardTypes } from './types'
import './style.scss'

export const TaskCard = ({ taskColor, title, name }: TaskCardTypes) => {
  return (
    <div className={`cardContainer ${taskColor}`}>
      <div className={'cardHeader'}>{name}</div>
      <div className={'cardContent'}>{title}</div>
    </div>
  )
}
