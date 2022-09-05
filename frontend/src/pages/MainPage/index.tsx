import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTime } from 'luxon'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch } from 'react-redux'

import { Clock } from '../../components/Clock'
import { ProjectItem } from '../../components/ProjectItem'
import { TaskCard } from '../../components/TaskCard'
import { TaskCardTypes } from '../../components/TaskCard/types'
import { CurrentWorkField } from '../../components/currentWorkField'
import { HEADERS } from '../../constants/headers'
import { Layout } from '../../layout'
import { allProjectsRequestAction } from '../../store/reducer/projects'
import { allTasksRequestAction } from '../../store/reducer/tasks'
import { useAppSelector } from '../../store/reduxHooks'
import { projectsListSelector } from '../../store/selectors/projectsSelector'
import { tasksListSelector } from '../../store/selectors/taskSelector'
import { userIdSelector } from '../../store/selectors/userSelector'
import { Project } from '../../types/ProjectsResponse'
import { TaskType } from '../../types/TaskResponse'

import './styles.scss'

export const MainPage = () => {
  const [value, setValue] = useState<Date | null>(new Date())
  const [projectsList, setProjectsList] = useState<Project[]>()
  const [projectsIdsList, setProjectsIdsList] = useState<string[]>()
  const [tasksList, setTasksList] = useState<TaskType[]>()
  const [task, setTask] = useState<TaskCardTypes | null>(null)

  const dispatch = useDispatch()

  const user_id = useAppSelector(userIdSelector)
  const projects_list = useAppSelector(projectsListSelector)
  const tasks_list = useAppSelector(tasksListSelector)

  const renderProjectList = projectsList?.map((project: Project, idx) => {
    return (
      <ProjectItem title={project.name} key={idx} status={project.status} />
    )
  })

  const handleSetTask = (e: TaskCardTypes) => {
    setTask(e)
    const newTasksList = tasksList?.filter((item) => item._id !== e.id)
    setTasksList(newTasksList)
  }

  const handleRemoveFromCurrentWork = (e: TaskCardTypes) => {
    setTask(null)
    // @ts-ignore
    setTasksList([task, ...tasksList])
    const endDate = DateTime.utc().toISO()
  }

  const renderTasksList = tasksList?.map((task, id) => {
    return (
      <TaskCard
        key={id}
        taskColor={'defaultTask'}
        title={task.title}
        name={task.name}
        id={task._id}
        onDragEnd={handleSetTask}
        isCurrentTask={false}
      />
    )
  })

  useEffect(() => {
    user_id && dispatch(allProjectsRequestAction({ user_id }))
  }, [user_id])

  useEffect(() => {
    projects_list && setProjectsList(projects_list)

    const idsArray = projects_list && projects_list?.map((item) => item.id)
    setProjectsIdsList(idsArray)
  }, [projects_list])

  useEffect(() => {
    projectsIdsList?.length &&
      dispatch(allTasksRequestAction({ project_id: projectsIdsList }))
  }, [projectsIdsList])

  useEffect(() => {
    tasks_list && setTasksList(tasks_list)
  }, [tasks_list])

  return (
    <Layout>
      <div className={'mainContainer'}>
        <div className={'leftSideBar'}>
          <Clock />
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
          <DndProvider backend={HTML5Backend}>
            <CurrentWorkField
              currentTask={task}
              onCloseTask={handleRemoveFromCurrentWork}
            />
            <div className={'taskContainer'}>{renderTasksList}</div>
          </DndProvider>
        </div>
      </div>
    </Layout>
  )
}
