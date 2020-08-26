import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const fetchPlayers = createAsyncThunk('players/fetch', async () => {
  const response = await axios.get(`${process.env.API}/players`)
  return response.data
})

const playersSlice = createSlice({
  name: 'players',
  initialState: [],
  extraReducers: {
    [fetchPlayers.fulfilled]: (state, action) => {
      const players = action.payload
      return players
    }
  }
})

export { fetchPlayers }

export default playersSlice.reducer
