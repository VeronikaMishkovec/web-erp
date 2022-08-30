import React, { useEffect, useState } from 'react'

import { DateTime } from 'luxon'

import './style.scss'

export const Clock = () => {
  const [minutes, setMinutes] = useState(DateTime.now().minute)
  const [hours, setHours] = useState(DateTime.now().hour)

  useEffect(() => {
    setInterval(() => {
      setMinutes(DateTime.now().minute)
    }, 5000)
  }, [])

  useEffect(() => {
    setHours(DateTime.now().hour)
  }, [minutes])

  return (
    <div className={'clockContainer'}>
      {hours}:{minutes}
    </div>
  )
}
