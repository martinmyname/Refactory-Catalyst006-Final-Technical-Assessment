const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

//route to "/"
app.get("/", (req, res) => {
  res.render("form");
});

//A server for the app
app.listen(3000, () => {
  console.log("Listening on port :http://localhost:3000");
});
