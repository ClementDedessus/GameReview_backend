var express = require("express");
var router = express.Router();
const { Video } = require("../model/video");
const { authorizeFromCookie } = require("../utils/authorize");
const { authorize } = require("../utils/authorize");
const videoModel = new Video();


router.get("/", function (req, res) {
    console.log("GET /commentaire");
    return res.json(videoModel.getAll());
  });


  router.post("/", function (req, res) {
    if (
      !req.body ||
      (req.body.hasOwnProperty("video") && req.body.message === 0)
    )
      return res.status(400).end();
  
    const jeu = videoModel.addOne(req.body);
  
    return res.json(jeu);
  });


  router.put("/:id", function (req, res) {
    // Send an error code '400 Bad request' if the body parameters are not valid
    const com = videoModel.updateOne(req.params.id);
    // Send an error code 'Not Found' if the game was not found :
    if (!com) return res.status(404).end();
    return res.json(com);
  });
  module.exports = router;
