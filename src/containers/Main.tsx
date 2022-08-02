import React from 'react'

import { Calendar } from '../components/Calendar/Calendar'
import { Today } from '../components/Today/Today'
import './style.scss'
import { DateTime } from 'luxon'

export const Main = () => {
  const weekday = DateTime.now().weekday
  const day = DateTime.now().day
  const month = DateTime.local().toLocaleString({ month: 'long' })

  return (
    <div className={'mainContainer'}>
      <div className={'leftSideBar'}>
        <Today weekday={weekday} day={day} month={month} />
        <Calendar />
      </div>
    </div>
  )
}
