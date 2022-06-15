const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstName: {type: String, required},
    LastName: {type: String, required},
    class: {type: String, required},
    subjects: {type: [String], required}
})

const Student = mongoose.model('Student', studentSchema)
module.exports(Student);