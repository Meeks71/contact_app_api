const express = require('express')
require('dotenv').config()

const mongoConfig = require('/config/mongoConfig')
const contactsRouter = require('/routes/contactsRouter')

const app = express()
const PORT = 4000

app.use(express.json())

//Routers


app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API!")
})

app.use('/contacts', contactsRouter)


//App listener
app.listen(PORT, () => {
     console.log(`Server is running on port: ${PORT}`)
     mongoConfig()
})










