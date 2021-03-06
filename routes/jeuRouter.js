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
    !req.body ||
    (req.body.hasOwnProperty("name") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("age_rating") && req.body.age_rating.length === 0)||
    (req.body.hasOwnProperty("category") && req.body.category.length === 0) ||
    (req.body.hasOwnProperty("cover") && req.body.cover.length === 0) ||
    (req.body.hasOwnProperty("first_release_date") && req.bodyfirst_release_date.length === 0) ||
    (req.body.hasOwnProperty("involved_companies") && req.body.involved_companies.length === 0) ||
    (req.body.hasOwnProperty("keywords") && req.body.keyword.length === 0) ||
    (req.body.hasOwnProperty("multiplayer_modes") && req.body.multiplayer_modes.length === 0) ||
    (req.body.hasOwnProperty("platforms") && req.body.platforms.length === 0) ||
    (req.body.hasOwnProperty("rating") && req.body.ratingt.length === 0) ||
    (req.body.hasOwnProperty("screenshots") && req.body.screenshots.length === 0) ||
    (req.body.hasOwnProperty("summary") && req.body.summary.length === 0) ||
    (req.body.hasOwnProperty("url") && req.body.url.length === 0) ||
    (req.body.hasOwnProperty("videos") && req.body.videos.length === 0)   
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
    !req.body ||
    (req.body.hasOwnProperty("name") && req.body.title.length === 0) ||
    (req.body.hasOwnProperty("age_rating") && req.body.age_rating.length === 0)||
    (req.body.hasOwnProperty("category") && req.body.category.length === 0) ||
    (req.body.hasOwnProperty("cover") && req.body.cover.length === 0) ||
    (req.body.hasOwnProperty("first_release_date") && req.bodyfirst_release_date.length === 0) ||
    (req.body.hasOwnProperty("involved_companies") && req.body.involved_companies.length === 0) ||
    (req.body.hasOwnProperty("keywords") && req.body.keyword.length === 0) ||
    (req.body.hasOwnProperty("multiplayer_modes") && req.body.multiplayer_modes.length === 0) ||
    (req.body.hasOwnProperty("platforms") && req.body.platforms.length === 0) ||
    (req.body.hasOwnProperty("rating") && req.body.ratingt.length === 0) ||
    (req.body.hasOwnProperty("screenshots") && req.body.screenshots.length === 0) ||
    (req.body.hasOwnProperty("summary") && req.body.summary.length === 0) ||
    (req.body.hasOwnProperty("url") && req.body.url.length === 0) ||
    (req.body.hasOwnProperty("videos") && req.body.videos.length === 0)  
  )
    return res.status(400).end();

  const jeu = jeuModel.updateOne(req.params.id, req.body);
  // Send an error code 'Not Found' if the game was not found :
  if (!jeu) return res.status(404).end();
  return res.json(jeu);
});

module.exports= router;




  

  
