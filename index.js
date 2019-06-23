const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging");
require("./startup/routes")(app);
require("./startup/prod");
require("./startup/db")();
require("./startup/config");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  winston.info(`listing port number ${port} ...`);
});
