const studentController = require('../controllers/student.controller')
const router = require('express').Router()

router.get('/', studentController.testRoute);

router.post('/', studentController.createStudent);


module.exports = router