import React from 'react'

import { ProjectItemType } from './types'

import './styles.scss'

export const ProjectItem = ({ status, title }: ProjectItemType) => {
  let statusStyle
  switch (status.toLowerCase()) {
    case 'default':
      statusStyle = 'defaultStyle'
      break
    case 'active':
      statusStyle = 'activeStyle'
      break
    case 'closed':
      statusStyle = 'closedStyle'
      break
  }
  return (
    <div className={'projectItemContainer'}>
      <div>{title}</div>
      <div className={statusStyle}>{status}</div>
    </div>
  )
}
