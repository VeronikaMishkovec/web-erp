import React, { useEffect, useState } from 'react'

import { useDrop } from 'react-dnd'
import { useStopwatch, useTimer } from 'react-timer-hook'

import { TaskCard } from '../TaskCard'

import { CurrentWorkFieldType } from './types'

import './styles.scss'

export const CurrentWorkField = ({
  currentTask,
  onCloseTask,
}: CurrentWorkFieldType) => {
  const { hours, minutes, pause, reset, seconds, start } = useStopwatch({
    autoStart: false,
  })
  const [secondsString, setSecondsString] = useState('00')
  const [minutesString, setMinutesString] = useState('00')
  const [hoursString, setHoursString] = useState('00')

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  useEffect(() => {
    if (seconds == 0 || seconds < 10) {
      setSecondsString(`0${seconds}`)
    } else {
      setSecondsString(`${seconds}`)
    }
  }, [seconds])

  useEffect(() => {
    if (minutes == 0 || minutes < 10) {
      setMinutesString(`0${minutes}`)
    } else {
      setMinutesString(`${minutes}`)
    }
  }, [minutes])

  useEffect(() => {
    if (hours == 0 || hours < 10) {
      setHoursString(`0${hours}`)
    } else {
      setHoursString(`${hours}`)
    }
  }, [hours])

  useEffect(() => {
    currentTask ? start() : pause()
  }, [currentTask])

  const TIMER = `${hoursString}:${minutesString}:${secondsString}`

  return (
    <div ref={drop} className={'currentWorkContainer'}>
      {currentTask ? (
        <div className={'activeCurrentWork'}>
          <TaskCard
            id={currentTask.id}
            name={currentTask.name}
            taskColor={'defaultTask'}
            title={currentTask.title}
            onDragEnd={() => 1}
            onCloseTask={onCloseTask}
            isCurrentTask={!!currentTask}
          />
          <div className={'timer'}>{TIMER}</div>
        </div>
      ) : (
        <div className={'currentWork'}>
          <div>{'There is no current work'}</div>
          <div className={'timer'}>{TIMER}</div>
        </div>
      )}
    </div>
  )
}
