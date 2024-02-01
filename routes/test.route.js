const express = require("express");
const bodyParser = require("body-parser");
const testControllers = require("../controllers/test.controllers");

const test = express.Router();
test.use(bodyParser.json());
test.use(bodyParser.urlencoded({extended:true}));

test.get("/", testControllers.test)

module.exports = test;