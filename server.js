const express = require("express");
const mongoose = require("mongoose");
//initial file
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
require("./src/models/Person");

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3001);
