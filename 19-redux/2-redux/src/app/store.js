
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/themes/themeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    themeColor: themeReducer,
  },
})

