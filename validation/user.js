const Joi = require("joi");

function validateLogin(data) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
}

function validateRegister(data) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
}

module.exports = { validateLogin, validateRegister };
