import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        fontFamily: 'Arima',
        colorScheme: 'light',
        colors: {
          brand: ['#de6b48', '#594F3B', '#119DA4', '#FFFD82', '#F6F8FF'],
        },
        primaryColor: 'brand',
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
)
