import React from 'react'
import '@/assets/scss/App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import EventListPage from '@/pages/EventListPage'
import MainLayout from '@/layouts/MainLayout'
import NotFoundPage from '@/pages/NotFoundPage'
import AddEventPage from './pages/AddEventPage'
import UndergroundPage from './pages/UndergroundPage'
import LoginPage from './pages/LoginPage'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainLayout />}>
          <Route index element={<Navigate replace to="/eventList" />} />
          <Route path="addEvent" element={<AddEventPage />} />
          <Route path="underground" element={<UndergroundPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="eventList">
            <Route index element={<EventListPage />} />
            <Route path=":number" element={<EventListPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
