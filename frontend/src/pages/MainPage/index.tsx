import React from 'react'

import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { TaskCard } from '../../components/TaskCard'
import { CurrentWorkField } from '../../components/currentWorkField'
import { Layout } from '../../layout'

import './styles.scss'

export const MainPage = () => {
  const [value, setValue] = React.useState<Date | null>(new Date())

  return (
    <Layout>
      <div className={'mainContainer'}>
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
        <div className={'mainContent'}>
          <CurrentWorkField />
          <TaskCard taskColor={'defaultTask'} />
        </div>
      </div>
    </Layout>
  )
}
