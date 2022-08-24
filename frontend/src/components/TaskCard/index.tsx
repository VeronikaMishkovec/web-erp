import React from 'react'

import { useDrag } from 'react-dnd'

import { TaskCardTypes } from './types'

import './style.scss'

export const TaskCard = ({ taskColor, title, name }: TaskCardTypes) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      console.log(item, dropResult)
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  return (
    <div className={`cardContainer ${taskColor}`} ref={drag}>
      <div className={'cardHeader'}>{name}</div>
      <div className={'cardContent'}>{title}</div>
    </div>
  )
}
