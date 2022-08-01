import React from 'react'
import { DateTime } from 'luxon'

import './style.scss'

export const Calendar = () => {
  const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const weekday = WEEKDAYS[DateTime.now().weekday]
  const day = DateTime.now().day
  const month = DateTime.local().toLocaleString({ month: 'long' })

  return (
    <div className={'todayDate'}>
      <div className={'dateItem'}>{weekday}</div>
      <div className={'dateItem day'}>{day}</div>
      <div className={'dateItem'}>{month}</div>
    </div>
  )
}
