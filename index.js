const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const sessionsRoute = require("./routes/sessions");

require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });

const app = express();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
  console.log("Connected to database...\n")
);

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/sessions", sessionsRoute);

app.get("/", (req, res) => res.send("boop"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...\n`));
