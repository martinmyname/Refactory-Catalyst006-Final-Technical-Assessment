const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("./models/Student");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//route to get from"/"
app.get("/", (req, res) => {
  res.render("form");
});

//route to post on "/"
app.post("/", (req, res) => {
  console.log(req.body);
  const student = new Student(req.body);
  student
    .save()
    .then(() => {
      res.render("form");
    })
    .catch((err) => {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    });
});

//connecting to mongoose
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//check if mongoose is connected properly
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//A server for the app
app.listen(3000, () => {
  console.log("Listening on port :http://localhost:3000");
});
