const express = require("express");
const { router } = require("./routers");
const { db } = require("./models");
const { errorHandler } = require("./middleware/error.middleware");

const app = express();
app.use(express.json());

app.use("/api", router);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  db.sync();
});
