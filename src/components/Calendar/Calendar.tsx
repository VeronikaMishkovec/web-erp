import React from 'react'
import { DateTime } from 'luxon'

export const Calendar = () => {
  const day = DateTime.now().day
  const month = DateTime.local().toLocaleString({ month: 'long' })
  return (
    <div>
      <div>{'Today'}</div>
      <div>{day}</div>
      <div>{month}</div>
    </div>
  )
}
