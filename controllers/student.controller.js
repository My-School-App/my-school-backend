const Student = require("../models/student.model");

exports.testRoute = async (req, res) => {
  res.json({ message: "Test route is working." });
};

exports.createStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    currentClass,
    subjects,
    yearJoined,
    age
  } = req.body;

  try {
    const existingUser = await Student.findOne({ firstName });

    if (existingUser) {
      return res.status(404).send("User already exists. Please Login");
    } else {
      const student = await Student.create({
        firstName,
        lastName,
        currentClass,
        subjects,
        yearJoined,
        age
      });
      res.status(201).json(student);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
