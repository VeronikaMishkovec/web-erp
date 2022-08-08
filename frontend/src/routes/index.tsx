import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { RegistrationPage } from '../pages/RegistrationPage'

export const ErpRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
      </Routes>
    </Router>
  )
}
