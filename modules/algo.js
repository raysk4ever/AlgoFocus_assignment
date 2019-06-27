const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  dob: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

const Algo = mongoose.model("Algo", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string()
      .min(3)
      .max(255)
      .required()
      .email(),
    dob: Joi.string().required(),
    phone: Joi.number().required()
  };
  return Joi.validate(user, schema);
}

exports.Algo = Algo;
exports.validate = validateUser;
