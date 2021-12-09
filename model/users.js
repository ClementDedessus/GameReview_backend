"use strict";
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { parse, serialize } = require("../utils/json");
var escape = require("escape-html");
const jwtSecret = "secrettest";
const LIFETIME_JWT = 24 * 60 * 60 * 1000;

const jsonDbPath = __dirname + "/../data/users.json";
const saltRounds = 10;
const defaultItems = [
    {
      username: "admin",
      password: "$2b$10$RqcgWQT/Irt9MQC8UfHmjuGCrQkQNeNcU6UtZURdSB/fyt6bMWARa",
    },
  ];

class Users {
    constructor(dbPath = jsonDbPath, items = defaultItems) {
      this.jsonDbPath = dbPath;
      this.defaultItems = items;
    }

  getOneByUsername(username) {
    const items = parse(this.jsonDbPath, this.defaultItems);
    const foundIndex = items.findIndex((item) => item.username == username);
    if (foundIndex < 0) return;

    return items[foundIndex];
  }


  async login(username, password) {
    const userFound = this.getOneByUsername(username);
    if (!userFound) return;
    const match = await bcrypt.compare(password, userFound.password);
    if (!match) return;

    const authenticatedUser = {
      username: escape(username),
      token: "Future signed token",
    };


    const token = jwt.sign(
      { username: authenticatedUser.username }, 
      jwtSecret, 
      { expiresIn: LIFETIME_JWT } 
    );

    authenticatedUser.token = token;
    return authenticatedUser;
  }

   async register(username, password) {
    const items = parse(this.jsonDbPath, this.defaultItems);
    const userFound = this.getOneByUsername(username);
    if (userFound) return;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newitem = {
        username:escape(username),
        password: escape(hashedPassword),
      };
      items.push(newitem);
      serialize(this.jsonDbPath, items);
    const authenticatedUser = {
      username: username,
      token: "Future signed token",
    };

    
    const token = jwt.sign(
      { username: authenticatedUser.username }, 
      jwtSecret, 
      { expiresIn: LIFETIME_JWT } 
    );

    authenticatedUser.token = token;
    return authenticatedUser;
  }

  async login(username, password) {
    const userFound = this.getOneByUsername(username);
    if (!userFound) return;
    // checked hash of passwords
    const match = await bcrypt.compare(password, userFound.password);
    if (!match) return;

    const authenticatedUser = {
      username: username,
      token: "Future signed token",
    };

    const token = jwt.sign(
      { username: authenticatedUser.username }, 
      jwtSecret,
      { expiresIn: LIFETIME_JWT } 
    );

    authenticatedUser.token = token;
    return authenticatedUser;
  }

  updateOne(idValue, body, idKey = "id") {
    const items = parse(this.jsonDbPath, this.defaultItems);
    const foundIndex = items.findIndex((item) => item[idKey] == idValue);
    if (foundIndex < 0) return;
    // create a new object based on the existing item - prior to modification -
    // and the properties requested to be updated (those in the body of the request)
    // use of the spread operator to create a shallow copy and repl
    const updateditem = { ...items[foundIndex], ...body };
    // replace the item found at index : (or use splice)
    items[foundIndex] = updateditem;

    serialize(this.jsonDbPath, items);
    return updateditem;
  
  }
  async updateOnes(idValue, body, idKey = "id") {
    const items = parse(this.jsonDbPath, this.defaultItems);
    const foundIndex = items.findIndex((item) => item[idKey] == idValue);
    if (foundIndex < 0) return;
    // create a new object based on the existing item - prior to modification -
    // and the properties requested to be updated (those in the body of the request)
    // use of the spread operator to create a shallow copy and repl
    const hashedPassword = await bcrypt.hash(body, saltRounds);
    const updateditem = { ...items[foundIndex], ...hashedPassword };
    // replace the item found at index : (or use splice)
    items[foundIndex] = hashedPassword;
    serialize(this.jsonDbPath, items);

    return updateditem;
  
  }

  async update(username, password) {
    const items = parse(this.jsonDbPath, this.defaultItems);
   const userFound = items.getOneByUsername(username)
    // create a new object based on the existing item - prior to modification -
    // and the properties requested to be updated (those in the body of the request)
    // use of the spread operator to create a shallow copy and repl
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    userFound.password=hashedPassword
  

    serialize(this.jsonDbPath, userFound);
    return userFound;
  
  }
  async crypt(password){
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
}

module.exports = { Users };
