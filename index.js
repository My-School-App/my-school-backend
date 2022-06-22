require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const db = require("./database");
const studentRoute = require("./routes/student.route");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allows express to use absolute file paths
const options = {
  root: path.join(__dirname)
};

// allows express serve static files
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Home route working."));

app.use("/student", studentRoute);

// upload assignments route
app.get("/upload-assignment", (req, res) =>
  res.sendFile("/public/pages/assignment-upload.html", options)
);

app.listen(PORT, () =>
  console.log(`Server started successfully at port ${PORT}`)
);
