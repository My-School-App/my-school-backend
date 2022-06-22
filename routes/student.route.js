const studentController = require('../controllers/student.controller')
const router = require('express').Router()

router.get('/', studentController.testRoute);

router.post('/', studentController.createStudent);

router.get("/all-students", studentController.getAllStudents)


module.exports = router