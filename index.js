const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const sessionsRoute = require("./routes/sessions");

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () =>
  console.log("Connected to database...\n")
);

app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/sessions", sessionsRoute);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}...\n`));
