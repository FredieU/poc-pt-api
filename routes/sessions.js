const router = require("express").Router();
const Session = require("../model/Session");
const { validateSession, validateToken } = require("../validation");

router.get("/", validateToken, async (req, res) => {
  const sessions = await Session.find({});
  res.json({ sessions });
});

router.post("/add", validateToken, async (req, res) => {
  const { error } = validateSession(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const session = await Session.findOne({ name: req.body.name });
  if (session) return res.status(422).send("Session name already exists");

  const newSession = new Session({
    name: req.body.name,
    time: req.body.time,
  });

  try {
    const { _id, time, name } = await newSession.save();
    res.send({ _id, time, name });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
