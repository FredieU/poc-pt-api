const router = require("express").Router();
const { authenticateToken } = require("../validation");

router.get("/", authenticateToken, (req, res) => {
  res.json({
    sessions: [
      { name: "HIIT it!", time: Date.now() },
      { name: "Cardio time", time: Date.now() },
    ],
  });
});

module.exports = router;
