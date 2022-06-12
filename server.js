const express = require('express')
require('dotenv').config()

const mongoConfig = require('./config/mongoConfig')
const contactsRouter = require('./routes/contactsRouter')
const morgan = require('morgan')
const helmet = require('helmet')
const authRouter = require('./routes/authRouter')

const app = express()
const PORT = 4000

//Routers
app.use(express.json())
app.use(morgan('dev'))//Monitoring app
app.use(helmet())//Protecting data to keep secure
app.use('/auth', authRouter)
app.use('/contacts', contactsRouter)


//Route name for app
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API!")
})


//App listener
app.listen(PORT, () => {
     console.log(`Server is running on port: ${PORT}`)
     mongoConfig()
})










