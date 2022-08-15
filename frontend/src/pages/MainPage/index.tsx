import React from 'react'

import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTime } from 'luxon'

import { TodayDate } from '../../components/TodayDate'
import { CurrentWorkField } from '../../components/currentWorkField'
import { WEEKDAYS } from '../../constants/datetime'
import { Layout } from '../../layout'

import './styles.scss'

export const MainPage = () => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  const today = DateTime.now().day
  const weekday = WEEKDAYS[DateTime.now().weekday]
  const month = DateTime.now().toFormat('MMMM')

  return (
    <Layout>
      <div className={'mainContainer'}>
        <div>
          <TodayDate day={today} weekday={weekday} month={month} />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              className={'calendar'}
              displayStaticWrapperAs='desktop'
              openTo='day'
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <CurrentWorkField />
      </div>
    </Layout>
  )
}
