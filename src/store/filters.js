import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters () {
      return initialState
    },
    updateFilters (state, action) {
      const { input, value } = action.payload
      state[input] = (value || '')
        .toString()
        .trim()
        .toLowerCase()
    }
  }
})

export const { resetFilters, updateFilters } = filtersSlice.actions

export default filtersSlice.reducer
