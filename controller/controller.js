const User = require("../models/user");

const getHome = (req, res) => {
  //get all user from database to show on home page
  User.find().then((result) => {
    res.render("home", {
      result,
    });
  });
};

const postHome = (req, res) => {
  const { name, age } = req.body;

  //find a specific user by a specific query criteria
  User.findOne({ name: name.toLowerCase() }).then((result) => {
    //if user found
    if (!result) {
      const newUser = new User({
        name,
        age,
      });
      newUser
        .save()
        .then((result) => console.log(` new user saved sucessfully`, result))
        .catch((e) => console.log(e));
      res.redirect("/");
      //if user not found
    } else {
      res.json({
        message: "user already existed",
      });
    }
  });
};

const deleteHome = (req, res) => {
  const { id } = req.params;
  //_id property is needed to find and delete
  User.findOneAndDelete({ _id: id }).then((result) => {
    console.log(`user deleted successfully`);
  });

  res.redirect("/");
};

const getupdate = (req, res) => {
  const { id } = req.params;
  // passing user id to the next page
  res.render("update", {
    id,
  });
};

const postUpdate = (req, res) => {
  //getting id from req parameter
  const { id } = req.params;
  const { name, age } = req.body;

  //_id property is needed to find and update
  User.findByIdAndUpdate({ _id: id }, { name, age }).then((result) => {
    console.log(`user updated sucessfully`, result);
    res.redirect("/");
  });
};

module.exports = { getHome, postHome, deleteHome, getupdate, postUpdate };
