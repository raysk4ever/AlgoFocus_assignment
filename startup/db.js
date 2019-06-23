const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/user")
    .then(() => console.log("connected to mongodb.."))
    .catch(err => console.error("could not connect to mongodb"));
};
