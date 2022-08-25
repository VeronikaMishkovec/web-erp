import React from 'react'

import { useDrop } from 'react-dnd'

import { TaskCard } from '../TaskCard'

import { CurrentWorkFieldType } from './types'

import './styles.scss'

export const CurrentWorkField = ({ currentTask }: CurrentWorkFieldType) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  return (
    <div ref={drop} className={'currentWorkContainer'}>
      {currentTask ? (
        <TaskCard
          id={currentTask.id}
          name={currentTask.name}
          taskColor={'defaultTask'}
          title={currentTask.title}
          onDragEnd={() => 1}
        />
      ) : (
        <div className={'currentWork'}>{'There is no current work'}</div>
      )}
    </div>
  )
}
