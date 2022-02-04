const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Router } = require('express')

const authMiddleware = require('../middleware/auth')

const { ADMIN } = require('../db/state')

const router = Router()

router
  .get('/check', authMiddleware, (req, res) => res.json({ message: 'User is log in' }))
  .post('/login', (req, res) => {
    const { login, password } = req.body

    switch (true) {
      case !login?.trim():
      case !password?.trim():
        return res.status(400).json({ message: 'Fields are required!' })
      case login !== ADMIN.LOGIN:
        return res.status(404).json({ message: 'Login is incorrect!' })
    }

    const isVerify = bcrypt.compareSync(password, ADMIN.PASSWORD);

    if (!isVerify) {
      return res.status(400).json({ message: 'Password is incorrect!' })
    }

    const token = jwt.sign({ login }, process.env.TOKEN_SECRET, { expiresIn: '1800s' })

    res.json({
      type: 'Bearer',
      token
    })
  })

module.exports = router
