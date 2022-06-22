//className
//subClass -A,B...
//subject
//teacherId
//assignment - object{instruction: '', topic: '', dateCreated: new Date(), dueDate: type of Date, file: ''} 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignmentSchema = new Schema({
    assignmentId: {type: String, required: true, unique: true},
    className: {type: String, required: true},
    subClass: {type: String, required: true, minlength: 1},
    subject: {type: String, required: true},
    topic: {type: String, required: true},
    teacherPostedId: {type: String, required: true},
    assignmentDetails: {
        instruction: {type: String, required: true},
        dateCreated: {type: Date, required: true, default: new Date()},
        dueDate: {type: Date, required: true}
    },
    file: {type: File, required: false}
})

const Assignment = mongoose.model('Assignment', assignmentSchema)
module.exports = Assignment;