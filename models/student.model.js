const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
    firstName: {type: String, required},
    LastName: {type: String, required},
    class: {type: String, required},
    subjects: {type: [String], required}
})