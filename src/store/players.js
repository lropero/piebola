import { createSlice } from '@reduxjs/toolkit'

const playersSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    updatePlayers (state, action) {
      const players = action.payload
      return players
    }
  }
})

export const { updatePlayers } = playersSlice.actions

export default playersSlice.reducer
