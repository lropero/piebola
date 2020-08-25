const express = require('express')

const router = express.Router()
router.get('/players', require('./players'))

module.exports = router
