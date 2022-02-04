const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json());

const users = require('./routes/users')
const auth = require('./routes/auth')

app.use('/api/auth', auth)
app.use('/api/users', users)

const PORT = process.env.SERVER_PORT ?? 3000

app.listen(PORT, () => console.log(`API server listening on port ${PORT}`))

module.exports = app
