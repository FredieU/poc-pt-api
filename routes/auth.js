const router = require("express").Router();

router.post("/register", (req, res) => {
  res.send("REGISTER! boop");
});

module.exports = router;
