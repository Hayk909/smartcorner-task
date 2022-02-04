const { Router } = require('express')

const authMiddleware = require('../middleware/auth')

const { USERS } = require('../db/state')

const router = Router()

router
  .get('/', authMiddleware, (req, res) => res.json({ users: USERS }))

module.exports = router
