"use strict";
const { parse, serialize } = require("../utils/json");

const jsonDbPath = __dirname + "/../data/coms.json";
var escape = require("escape-html");

class Commentaire {
  constructor(dbPath = jsonDbPath) {
    this.jsonDbPath = dbPath;

  }

  getNextId() {
    const coms = parse(this.jsonDbPath);
    let nextId;
    if (coms.length === 0) nextId = 1;
    else nextId = coms[coms.length - 1].id + 1;

    return nextId;
  }

getDateHour(){
    
        const date = new Date();
        return date ;
    
}

  addOne(body) {
    const coms = parse(this.jsonDbPath);
    const newComs = {
      id: this.getNextId(),
      message: escape(body.message),
      date : this.getDateHour(),
      expediteur : escape(body.expediteur),
      like : 0,
    };
    coms.push(newComs);
    serialize(this.jsonDbPath, coms);
    return newComs;
  }

  getAll() {
    const commentaires = parse(this.jsonDbPath);
    return commentaires;
  }
  updateOne(id) {
    const coms = parse(this.jsonDbPath);
    const foundIndex = coms.findIndex((com) => com.id == id);
    const like = coms[foundIndex].like;
    const updatedlike=like+1;
    if (foundIndex < 0) return;
    coms[foundIndex].like = updatedlike;

    serialize(this.jsonDbPath, coms);
    return updatedlike;
  }
}

module.exports = { Commentaire };

