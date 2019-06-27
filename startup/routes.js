const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const movie = require("../routes/movie");
const error = require("../middelware/error");
const vec = require("../routes/vec");
const algo = require("../routes/algo");

module.exports = function(app) {
  app.use(express.json());

  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/movie", movie);
  app.use("/api/vec", vec);
  app.use("/api/algo", algo);
  app.use(error);
};
