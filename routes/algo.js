const express = require("express");
const router = express.Router();
const { Algo, validate } = require("../modules/algo");
const bodyparser = require("body-parser");
var urlencodedParser = bodyparser.urlencoded({ extended: false });

router.get("/", urlencodedParser, (req, res) => {
  console.log("req", req.body);
  res.render("index");

  // res.sendFile(__dirname + "/index.html");
  // res.send("hi");
});

router.post("/", urlencodedParser, (req, res) => {
  console.log(req.body);

  const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  if (error) {
    res.render("error", { error });
  }
  let user = new Algo({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    phone: req.body.phone
  });
  user = user
    .save()
    .then(() => res.render("submitted"))
    .catch(error => {
      res.status(500).send(`error: this email is already registred`);
    });
});

module.exports = router;
