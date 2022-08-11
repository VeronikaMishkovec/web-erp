import React from 'react'

import { DateTime } from 'luxon'

import { TodayDate } from '../../components/TodayDate'
import { WEEKDAYS } from '../../constants/datetime'
import { Layout } from '../../layout'

import './styles.scss'

export const MainPage = () => {
  const today = DateTime.now().day
  const weekday = WEEKDAYS[DateTime.now().weekday]
  const month = DateTime.now().toFormat('MMMM')

  return (
    <Layout>
      <div className={'mainContainer'}>
        <TodayDate day={today} weekday={weekday} month={month} />
      </div>
    </Layout>
  )
}
