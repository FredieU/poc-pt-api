const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const { validateRegister } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email is already registered");

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
  });

  try {
    const { _id, email, username } = await user.save();
    res.send({ _id, email, username });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
