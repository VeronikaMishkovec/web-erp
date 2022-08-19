import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useDispatch } from 'react-redux'

import { ProjectItem } from '../../components/ProjectItem'
import { TaskCard } from '../../components/TaskCard'
import { CurrentWorkField } from '../../components/currentWorkField'
import { HEADERS } from '../../constants/headers'
import { Layout } from '../../layout'
import { allProjectsRequestAction } from '../../store/reducer/projects'
import { useAppSelector } from '../../store/reduxHooks'
import { projectsListSelector } from '../../store/selectors/projectsSelector'
import { userIdSelector } from '../../store/selectors/userSelector'
import { Project } from '../../types/ProjectsResponse'
import './styles.scss'

export const MainPage = () => {
  const [value, setValue] = useState<Date | null>(new Date())
  const [projectsList, setProjectsList] = useState<Project[]>()

  const dispatch = useDispatch()

  const user_id = useAppSelector(userIdSelector)
  const projects_list = useAppSelector(projectsListSelector)

  const renderProjectList = projectsList?.map((project: Project, idx) => {
    return (
      <ProjectItem title={project.name} key={idx} status={project.status} />
    )
  })

  useEffect(() => {
    user_id && dispatch(allProjectsRequestAction({ user_id }))
  }, [user_id])

  useEffect(() => {
    projects_list && setProjectsList(projects_list)
  }, [projects_list])

  return (
    <Layout>
      <div className={'mainContainer'}>
        <div className={'leftSideBar'}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              className={'calendar'}
              displayStaticWrapperAs='desktop'
              openTo='day'
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <div className={'subHeader'}>{HEADERS.YOUR_PROJECTS}</div>
          {renderProjectList}
        </div>
        <div className={'mainContent'}>
          <CurrentWorkField />
          {/* <TaskCard taskColor={'defaultTask'} /> */}
        </div>
      </div>
    </Layout>
  )
}
