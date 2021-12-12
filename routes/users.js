var express = require("express");
var router = express.Router();
const { Users } = require("../model/users");
const userModel = new Users();
const { authorizeFromCookie } = require("../utils/authorize");
const bcrypt = require("bcrypt");

// update username
router.put("/:username", authorizeFromCookie, function (req, res) {
  if (!req.body || !req.body.username) return res.sendStatus(400);
  // Ensure that the user associated to the token (req.user loaded in the authorize middleware)
  // is the user that shall see its data updated
  if (req.params.username !== req.user.username) return res.sendStatus(403); //Forbidden status code
  const user = userModel.getOneByUsername(req.params.username);
  // Send an error code '404 Not Found' if the user was not found
  if (!user) return res.sendStatus(404);
  const users = userModel.updateOne(req.params.username, req.body, "username");

  return res.json(users);
});

router.put("/:username/test", authorizeFromCookie, function (req, res) {
  if (!req.body || !req.body.password) return res.sendStatus(400);
  // Ensure that the user associated to the token (req.user loaded in the authorize middleware)
  // is the user that shall see its data updated
  if (req.params.username !== req.user.username) return res.sendStatus(403); //Forbidden status code
  const user = userModel.getOneByUsername(req.params.username);
  // Send an error code '404 Not Found' if the user was not found
  if (!user) return res.sendStatus(404);
  const users = userModel.updateOnes(req.params.username, req.body.password);
  return res.json(users);
});

module.exports = router;
