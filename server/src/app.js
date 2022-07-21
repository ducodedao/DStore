const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const errMiddleware = require('./middlewares/errMiddleware')
const fileUpload = require('express-fileupload')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())

// Route
const user = require('./routes/userRoute')

app.use('/api/v1', user)

// Middleware for Errors
app.use(errMiddleware)

module.exports = app
