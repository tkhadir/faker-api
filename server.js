const express = require('express')
const http = require('http')
const app = express()
const PORT = 3000
require('./routes')(app)
const server = http.createServer(app)
module.exports = {
    server: server,
    PORT: PORT
}