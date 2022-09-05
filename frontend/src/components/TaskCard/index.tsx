import React, { useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { useDrag } from 'react-dnd'
import { useStopwatch } from 'react-timer-hook'

import { TaskCardTypes } from './types'

import './style.scss'

export const TaskCard = ({
  taskColor,
  title,
  name,
  id,
  onDragEnd,
  onCloseTask,
  isCurrentTask,
}: TaskCardTypes) => {
  const { hours, minutes, pause, reset, seconds, start } = useStopwatch({
    autoStart: false,
  })
  const [secondsString, setSecondsString] = useState('00')
  const [minutesString, setMinutesString] = useState('00')
  const [hoursString, setHoursString] = useState('00')

  const TIMER = `${hoursString}:${minutesString}:${secondsString}`

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

  useEffect(() => {
    if (isCurrentTask) {
      console.log(id, title)
      start()
    } else {
      pause()
    }
  }, [isCurrentTask])

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

  // useEffect(() => {
  //   isCurrentTask ? start() : pause()
  // }, [isCurrentTask])

  return (
    <div className={`cardContainer ${taskColor}`} ref={drag} key={id}>
      <div className={'cardHeader'}>
        <div>{name}</div>
        {isCurrentTask && (
          <CloseIcon onClick={onCloseTask} style={{ cursor: 'pointer' }} />
        )}
      </div>
      <div className={'cardContent'}>{title}</div>
      <div>{TIMER}</div>
    </div>
  )
}
