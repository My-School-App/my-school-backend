const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    id: {type: String, required, unique},
    firstName: {type: String, required},
    lastName: {type: String, required},
    currentClass: {type: String, required},
    subjects: {type: [String], required}
})

const Student = mongoose.model('Student', studentSchema)
module.exports(Student);