const express = require("express");
const authRoute = require("./routes/auth");

const app = express();

app.use("/api/user", authRoute);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}...\n`));
