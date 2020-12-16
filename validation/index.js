const userValidation = require("./user");
const tokenValidation = require("./token");

module.exports = { ...tokenValidation, ...userValidation };
