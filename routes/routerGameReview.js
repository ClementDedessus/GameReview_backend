var express = require("express");
var router = express.Router();
const igdb = require('igdb-api-node').default;
const client = igdb('7osx17fuhdph8yvy2ux3vqc0og5vit', 'm1wr7hp97ee1i1pogmnowjjywp03x1')

// const { Games } = require("../model/games");
// const gameModel = new Game();

// GET /games : read all the games from the menu
router.get("/", function (req, res) {
    console.log("GET /games");
    return res.json(gameModel.getAll());
  });



