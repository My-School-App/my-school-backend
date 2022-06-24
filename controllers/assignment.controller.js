// const {options } = require("../index")
const path = require("path");

exports.assignmentHandler = (req, res) => {
  res.sendFile((path.join(__dirname, '../public', 'pages/assignment-upload.html')));
};
