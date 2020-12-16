const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");
const { validateLogin, validateRegister } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(422).send("Email is already taken");

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
  });

  try {
    const { _id, email, username } = await newUser.save();
    res.send({ _id, email, username });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const INVALID_LOGIN_MSG = "Email and/or password is invalid";

  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send(INVALID_LOGIN_MSG);

  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!passwordIsValid) return res.status(401).send(INVALID_LOGIN_MSG);

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  const { _id, email, username } = user;
  res
    .header("auth-token", token)
    .status(200)
    .send({ _id, email, username, token });
});

module.exports = router;
