const {options }=require("../index")

exports.assignmentHandler = (req, res) => {
  res.sendFile("/home/ayomide-owolana/Desktop/myschoolapp/my-school-backend/public/pages/assignment-upload.html");
//   res.sendFile("./public/pages/assignment-upload.html",options);
// res.json({text:"htllo"})
};
