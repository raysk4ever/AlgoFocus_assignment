const express = require("express");
const router = express.Router();
const { Algo, validate } = require("../modules/algo");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = new Algo({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    phone: req.body.phone
  });
  user = await user.save();
  res.send(user);
});

module.exports = router;
