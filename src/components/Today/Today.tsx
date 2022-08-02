import React from 'react'

import { WEEKDAYS } from '../../constatnts/weekdays'
import './style.scss'
import { TodayTypes } from './types'

export const Today = ({ weekday, day, month }: TodayTypes) => {
  const currentWeekday = WEEKDAYS[weekday]

  return (
    <div className={'todayDate'}>
      <div className={'dateItem'}>{currentWeekday}</div>
      <div className={'dateItem day'}>{day}</div>
      <div className={'dateItem'}>{month}</div>
    </div>
  )
}
