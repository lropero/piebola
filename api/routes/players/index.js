const path = require('path')
const { readFileSync } = require('fs')

module.exports = (req, res) => {
  try {
    const players = readFileSync(path.join(__dirname, 'players.json'))
    res.send(JSON.parse(players))
  } catch (error) {
    res.status(500).send(error.toString())
  }
}
