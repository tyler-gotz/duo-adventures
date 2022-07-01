import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
)
