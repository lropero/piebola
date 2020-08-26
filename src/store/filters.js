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
      switch (input) {
        case 'age': {
          if (new RegExp('^[0-9]*$').test(value)) {
            state[input] = value.toString()
          }
          break
        }
        case 'name': {
          if (new RegExp('^[a-z\\s]*$', 'i').test(value)) {
            state[input] = value
          }
          break
        }
        default: {
          state[input] = value
        }
      }
    }
  }
})

export const { resetFilters, updateFilters } = filtersSlice.actions

export default filtersSlice.reducer
