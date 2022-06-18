const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    id: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
    yearJoined: {type: Date, required: true},
    currentClass: {type: String, required: true},
    subjects: {type: [String], required: true}
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student;