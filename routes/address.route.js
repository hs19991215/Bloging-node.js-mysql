const express = require("express");
const bodyParser = require("body-parser");
const addressControllers = require("../controllers/address.controllers");
const checkAuth = require("../middleware/checkAuth.middleware");
const address = express.Router();
address.use(bodyParser.json());
address.use(bodyParser.urlencoded({extended:true}));

address.post("/add",checkAuth.checkAuth, addressControllers.add)

module.exports = address;