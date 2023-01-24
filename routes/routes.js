const express = require("express");
const router = express.Router();
const {
  getHome,
  postHome,
  deleteHome,
  getupdate,
  postUpdate,
} = require("../controller/controller");

router.route("/update/:id").get(getupdate).post(postUpdate);
router.route("/update").get(getupdate).post(postUpdate);
router.route("/:id").get(deleteHome);
router.route("/").get(getHome).post(postHome);

module.exports = router;
