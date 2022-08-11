import React from 'react'

import { TodayDateType } from './types'

import './styles.scss'

export const TodayDate = ({ day, weekday, month }: TodayDateType) => {
  return (
    <div className={'todayDateContainer'}>
      <div className={'weekday'}>{weekday}</div>
      <div className={'day'}>{day}</div>
      <div className={'month'}>{month}</div>
    </div>
  )
}
