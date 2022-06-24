require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const db = require("./database");
const studentRoute = require("./routes/student.route");
const assignmentRoute = require("./routes/assignment.route");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allows express serve static files
app.use(express.static("public"));

//test route
app.get("/", (req, res) => res.send("Home route working."));

// login
app.get("/login", (req, res) => res.sendFile("/public/pages/login.html"));

app.post("/login", (req, res) => {
  const { username, password } = res.body;
  username == "test" && password == "test" ? res.redirect("/dashboard") : "";
});

app.use("/student", studentRoute);
app.use("/assignment", assignmentRoute);

app.listen(PORT, () =>
  console.log(`Server started successfully at port ${PORT}`)
);
