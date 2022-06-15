const Student = require('../models/student.model')

exports.createStudent = async(req, res) => {
    const { id, firstName, lastName, currentClass, subjects } = req.body

    try{
        
        const existingUser = await Student.findById({id})

        if(existingUser){
            return res.status(404).send("User already exists. Please Login")
        }

        const student = await Student.create({
            id,
            firstName,
            lastName,
            currentClass,
            subjects
        })
        res.status(201).json(student)

    }catch(err){
        res.status(500).json({message: err.message})
    }
}