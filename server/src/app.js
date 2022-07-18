const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const errMiddleware = require('./middlewares/errMiddleware')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware for Errors
app.use(errMiddleware)

module.exports = app
