import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../features/Header'

// export interface IMainLayoutProps {}

const MainLayout: React.FunctionComponent = () => {
  return (
    <main style={{ border: 2, padding: 2, borderColor: 'black', borderStyle: 'solid' }}>
      <Header />
      <Outlet />
    </main>
  )
}

export default MainLayout
