const express = require('express')
const app = express()
const db = require('./database')

app.get('/', (req, res) => 
    res.send('route working')
)

app.listen(3000, () => console.log('server started successfully'))