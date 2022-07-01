import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: import.meta.env.DEV,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>