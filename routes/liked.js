var express = require("express");
var router = express.Router();
const { Like } = require("../model/comsliked");
const { authorizeFromCookie } = require("../utils/authorize");
const { authorize } = require("../utils/authorize");
const comModel = new Like();


router.get("/:expediteur", function (req, res) {
    console.log("GET /commentaire");
    return res.json(comModel.getAllgame(req.params.expediteur));
  });


  router.post("", function (req, res) {
    const jeu = comModel.vote(req.body);
  
    return res.json(jeu);
  });

  router.get("", function (req, res) {
    console.log("GET /commentaire");
    return res.json(comModel.getEvaluation());
  });
  module.exports = router;
