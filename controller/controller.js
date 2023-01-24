const User = require("../models/user");

const getHome = (req, res) => {
  User.find().then((result) => {
    res.render("home", {
      result,
    });
  });
};

const postHome = (req, res) => {
  const { name, age } = req.body;
  const newUser = new User({
    name,
    age,
  });
  newUser
    .save()
    .then((result) => console.log(`user saved sucessfully`, result))
    .catch((e) => console.log(e));

  res.redirect("/");
};

const deleteHome = (req, res) => {
  const { id } = req.params;
  User.findOneAndDelete({ _id: id }, { true: "asdasd" }).then((result) => {
    console.log(`user deleted successfully`);
  });

  res.redirect("/");
};

const getupdate = (req, res) => {
  const { id } = req.params;
  res.render("update", {
    id,
  });
};

const postUpdate = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  User.findByIdAndUpdate({ _id: id }, { name, age }).then((result) => {
    console.log(`user updated sucessfully`, result);
    res.redirect("/");
  });
};

module.exports = { getHome, postHome, deleteHome, getupdate, postUpdate };
