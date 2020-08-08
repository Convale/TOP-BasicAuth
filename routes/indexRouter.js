const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

// GET home page
router.get("/", (req, res) => {
  res.render("index", {
    title: "Basic Authentication Site",
    user: req.user,
  });
});

// GET sign up page
router.get("/sign-up", function (req, res) {
  res.render("sign-up", { title: "Basic Authentication Site" });
});

// POST sign up page
router.post("/sign-up", (req, res, next) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.userPass, salt, (err, hashedPassword) => {
      const user = new User({
        username: req.body.userUsername,
        password: hashedPassword,
      }).save((err) => {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
    });
  });
});

// POST login page
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// GET logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
