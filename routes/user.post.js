const express = require("express");
const bodyParser = require("body-parser");
const userControllers = require("../controllers/user.controllers");

const user = express.Router();
user.use(bodyParser.json());
user.use(bodyParser.urlencoded({extended:true}));


user.post("/sign-up", userControllers.signup)
user.post("/login", userControllers.login)

module.exports = user;