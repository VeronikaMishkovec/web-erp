import React, { useEffect, useState } from 'react'

import { DateTime } from 'luxon'

import './style.scss'

export const Clock = () => {
  const [minutes, setMinutes] = useState('00')
  const [hours, setHours] = useState(DateTime.now().hour)

  useEffect(() => {
    setInterval(() => {
      if (DateTime.now().minute < 10) {
        setMinutes(`0${DateTime.now().minute}`)
      } else {
        setMinutes(`${DateTime.now().minute}`)
      }
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
