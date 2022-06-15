const { urlencoded } = require('express')
const express = require('express')
const app = express()
const db = require('./database')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => 
    res.send('route working')
)

app.listen(3000, () => console.log('server started successfully'))