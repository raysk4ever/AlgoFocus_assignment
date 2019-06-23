const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const movie = require("../routes/movie");
const error = require("../middelware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/movie", movie);
  app.use(error);
};
