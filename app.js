var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var authsRouter = require("./routes/auths");
var jeuRouter = require("./routes/jeu");






var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/auths", authsRouter);
app.use("/jeu", jeuRouter);

module.exports = app;
