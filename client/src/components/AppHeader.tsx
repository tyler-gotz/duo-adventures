import React from 'react'
import { Header, MediaQuery, Title, useMantineTheme } from '@mantine/core'
import { Link } from 'react-router-dom'

const AppHeader: React.FC = () => {
  const theme = useMantineTheme()
  return (
    <Header
      height={65}
      p="md"
      sx={{
        backgroundColor: theme.colors.brand[2],
        color: theme.colors.brand[4],
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Link to="/">
          <Title order={2} sx={{ fontFamily: theme.fontFamily }}>
            Duo Adventures
          </Title>
        </Link>
        <MediaQuery
          smallerThan="sm"
          styles={{ display: 'none', justifyContent: 'end' }}
        >
          <div>
            <Link to="/login" style={{ marginRight: 15 }}>
              Login
            </Link>
            <Link to="/register">Register</Link>
          </div>
        </MediaQuery>
      </div>
    </Header>
  )
}

export default AppHeader
