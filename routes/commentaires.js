var express = require("express");
var router = express.Router();
const { Commentaire } = require("../model/commentaire");
const { authorizeFromCookie } = require("../utils/authorize");
const { authorize } = require("../utils/authorize");
const comModel = new Commentaire();


router.get("/:game", function (req, res) {
    console.log("GET /commentaire");
    return res.json(comModel.getGame(req.params.game));
  });


  router.post("", function (req, res) {
    if (
      !req.body ||
      (req.body.hasOwnProperty("message") && req.body.message === 0)
    )
      return res.status(400).end();
  
    const jeu = comModel.addOne(req.body);
  
    return res.json(jeu);
  });


  router.put("/:id", function (req, res) {
    // Send an error code '400 Bad request' if the body parameters are not valid
    const com = comModel.updateOne(req.params.id);
    // Send an error code 'Not Found' if the game was not found :
    if (!com) return res.status(404).end();
    return res.json(com);
  });

  router.put("/dejalike/:id", function (req, res) {
    // Send an error code '400 Bad request' if the body parameters are not valid
    const com = comModel.updateOneDejalike(req.params.id);
    // Send an error code 'Not Found' if the game was not found :
    if (!com) return res.status(404).end();
    return res.json(com);
  });
  module.exports = router;
