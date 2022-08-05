import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import { RegistrationPage } from '../pages/RegistrationPage'

export const ErpRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
      </Routes>
    </Router>
  )
}
