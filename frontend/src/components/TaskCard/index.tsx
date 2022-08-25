import React, { useState } from 'react'

import { useDrag } from 'react-dnd'

import { TaskCardTypes } from './types'

import './style.scss'

export const TaskCard = ({
  taskColor,
  title,
  name,
  id,
  onDragEnd,
}: TaskCardTypes) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { name, title, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      onDragEnd(item)
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <div className={`cardContainer ${taskColor}`} ref={drag} key={id}>
      <div className={'cardHeader'}>{name}</div>
      <div className={'cardContent'}>{title}</div>
    </div>
  )
}
