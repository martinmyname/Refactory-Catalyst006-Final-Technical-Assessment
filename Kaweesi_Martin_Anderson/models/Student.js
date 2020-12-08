const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  surname: String,
  gname: String,
  DOB: String,
  country: String,
  residence: String,
  phone: String,
  email: String,
  skills: String,
  projects: String,
});
module.exports = mongoose.model("Student", studentSchema);
