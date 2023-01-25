const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mernDB")
  .then((res) => {
    console.log("server connected sucessfully");
  })
  .catch((e) => console.log(e));
const User = require("./models/user");

const user1 = new User({
  name: "cyrus sakib",
  age: 25,
});

user1
  .save()
  .then(() => {
    console.log("user saved successfully");
  })
  .catch((e) => {
    console.log(e);
  });
