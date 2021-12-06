var express = require("express");
var router = express.Router();
const { Jeux } = require("../model/jeux");
const jeuModel = new Jeux();

// GET /games : read all the games
router.get("/", function (req, res) {
  console.log("GET /jeux");
  return res.json(jeuModel.getAll());
});

// GET /games/{id} : Get a game
router.get("/:id", function (req, res) {
  console.log(`GET /jeux/${req.params.id}`);

  const jeu = jeuModel.getOne(req.params.id);
 
  if (!jeu) return res.status(404).end();

  return res.json(jeu);
});

// POST /games : create a game to be added 
router.post("/", function (req, res) {
  console.log("POST /jeux");

  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body||
    !req.body.name||
    !req.body.age_rating||
    !req.body.category||
    !req.body.cover||
    !req.body.first_release_date.length||
    !req.body.involved_companies ||
    !req.body.keyword ||
    !req.body.multiplayer_modes||
    !req.body.platforms||
    !req.body.ratingt||
    !req.body.screenshots||
    !req.body.summary||
    !req.body.url||
    !req.body.videos   
    
  )
    return res.status(400).end();

  const jeu = jeuModel.addOne(req.body);

  return res.json(jeu);
});

// DELETE /games/{i} : delete a game 
router.delete("/:id", function (req, res) {
  console.log(`DELETE /games/${req.params.id}`);

  const jeu = jeuModel.deleteOne(req.params.id);
  // Send an error code '404 Not Found' if the game was not found
  if (!jeu) return res.status(404).end();
  return res.json(jeu);
});

// PUT /jeux/{id} : update a jeux at id
router.put("/:id", function (req, res) {
  console.log(`PUT /jeux/${req.params.id}`);
  // Send an error code '400 Bad request' if the body parameters are not valid
  if (
    !req.body||
    !req.body.name||
    !req.body.age_rating||
    !req.body.category||
    !req.body.cover||
    !req.body.first_release_date.length||
    !req.body.involved_companies ||
    !req.body.keyword ||
    !req.body.multiplayer_modes||
    !req.body.platforms||
    !req.body.ratingt||
    !req.body.screenshots||
    !req.body.summary||
    !req.body.url||
    !req.body.videos     )
    return res.status(400).end();

  const jeu = jeuModel.updateOne(req.params.id, req.body);
  // Send an error code 'Not Found' if the game was not found :
  if (!jeu) return res.status(404).end();
  return res.json(jeu);
});

module.exports= router;




  

  
