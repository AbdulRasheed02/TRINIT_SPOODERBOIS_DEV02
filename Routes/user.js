var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("../Models/user");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add", function (req, res) {
  const user = new User({
    userName: req.body.userName,
    userPassword: req.body.userPassword,
    userType: req.body.userType,
  });
  user.save().then((val) => {
    res.json({ msg: "User Added Successfully", val: val });
  });
});

app.post("/login", async (req, res) => {
  try {
    const { userName, userPassword, userType } = req.body;
    const user = await User.findOne({
      userName: userName,
    });
    if (user) {
      if (userPassword === user.userPassword && userType === user.userType) {
        return res.status(200).json({
          message: "Success",
        });
      }
      return res.status(401).json({
        message: "Incorrect username and password",
      });
    }
    return res.status(404).json({
      message: "Login failed. User does not exist.",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Server Error, Try again later.",
    });
  }
});

module.exports = app;
