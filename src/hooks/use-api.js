import axios from 'axios'

const useApi = () => ({
  players: async () => {
    let players = []
    try {
      const response = await axios.get(`${process.env.API}/players`)
      players = (response.status === 200 && response.data) || players
    } catch (error) {
      console.error(error.toString())
    }
    return players
  }
})

export default useApi
