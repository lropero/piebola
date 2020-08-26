import { configureStore } from '@reduxjs/toolkit'

import filters from './filters'
import players from './players'

const store = configureStore({
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  reducer: { filters, players }
})

export default store
