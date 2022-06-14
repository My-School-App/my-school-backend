require('dotenv').config()
const mongoose = require('mongoose')
const { MONGODB_URI } = process.env


mongoose.connect(MONGODB_URI)
    .then(() => console.log('DB is Connected...'))
    .catch(err => {
        console.log('DB Connection Failed!!! ' + err);
        process.exit();
    })
