import React from 'react'

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import { LoginPage } from '../pages/LoginPage'
import { MainPage } from '../pages/MainPage'
import { ProfilePage } from '../pages/ProfilePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { useAppSelector } from '../store/reduxHooks'
import { MainType } from '../store/types'

export const ErpRoutes = () => {
  const isLogin = useAppSelector((state: MainType) => state.auth)

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.LOGIN}
          element={
            isLogin ? <Navigate replace to={ROUTES.MAIN} /> : <LoginPage />
          }
        />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}
