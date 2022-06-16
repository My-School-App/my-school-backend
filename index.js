require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env
const db = require('./database')
const studentRoute = require('./routes/student.route')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => 
    res.send('Home route working.')
)

// app.use('/student', studentRoute)

app.listen(PORT, () => console.log(`Server started successfully at port ${PORT}`))