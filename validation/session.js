const Joi = require("joi");

function validateSession(data) {
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    time: Joi.string().min(6).required(),
  });

  return schema.validate(data);
}

module.exports = { validateSession };
