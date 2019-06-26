const api = require("car-registration-api-india");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  api.CheckCarRegistrationIndia("UK06AA3171", "raysk4ever", function(data) {
    console.log(data.Description);
    res.send(data.Description);
  });
});

module.exports = router;
