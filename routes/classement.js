var express = require("express");
var router = express.Router();
const { Jeux } = require("../model/jeux");


const jeuModel = new Jeux();

// GET /games : read all the games
router.get("/", function (req, res) {

  return res.json(jeuModel.getBestGames());
  
});

//Classement top 5?
router.get("/classement/:rating", function (req, res) {
    console.log(`GET /jeux/${req.params.name}`);
  
    const jeu = jeuModel.getAll();
    const aRenvoyer = [{}];
  
    if (!jeu) return res.status(404).end();
    
  });

  module.exports = router;