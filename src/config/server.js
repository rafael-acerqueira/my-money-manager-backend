const port = process.env.PORT ? process.env.PORT : 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const server = express()
const queryParser = require('express-query-int')

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(queryParser())

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}`)
})

module.exports = server