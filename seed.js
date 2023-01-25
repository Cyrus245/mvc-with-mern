const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mernDB")
  .then((res) => {
    console.log("server connected sucessfully");
  })
  .catch((e) => console.log(e));
const User = require("./models/user");

const seeders = [
  {
    name: "cyrus sakib",
    age: 25,
    dob: new Date(),
  },
  {
    name: "maria",
    age: 25,
    dob: new Date(),
  },
  {
    name: "Synthiya Nusrat",
    age: 26,
    dob: new Date(),
  },
];

User.insertMany(seeders).then((results) => {
  console.log(`user saved successfully`, results);
});

// const user1 = new User({
//   name: "cyrus sakib",
//   age: 25,
// });

// user1
//   .save()
//   .then(() => {
//     console.log("user saved successfully");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
