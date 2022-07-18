const app = require('./app')
const env = require('dotenv')

// Config
env.config()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`)
})
