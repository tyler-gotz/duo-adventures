import React from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

const Layout: React.FC = () => {
  return (
    <AppShell
      fixed
      header={<AppHeader />}
      style={{
        backgroundColor: '#F5F5F5',
      }}
    >
      <div>
        <Outlet />
      </div>
    </AppShell>
  )
}

export default Layout
