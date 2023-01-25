const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mernDB")
  .then((res) => {
    console.log("server connected sucessfully");
  })
  .catch((e) => console.log(e));
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/routes");
const bodyParser = require("body-parser");
const { PORT } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
