import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../store/AuthSlice'
export const Store = configureStore({
  reducer: {
    AuthSlice
  },
})