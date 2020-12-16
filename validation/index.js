const sessionValidation = require("./session");
const userValidation = require("./user");
const validateToken = require("./token");

module.exports = { ...sessionValidation, ...userValidation, validateToken };
