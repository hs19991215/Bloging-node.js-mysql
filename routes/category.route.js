const express = require("express");
const bodyParser = require("body-parser");
const categoryControllers = require("../controllers/category.controllers");
const checkAuth = require("../middleware/checkAuth.middleware");

const category = express.Router();
category.use(bodyParser.json());
category.use(bodyParser.urlencoded({ extended: true }));

category.post("/add", checkAuth?.checkAuth, categoryControllers?.add);
category.get("/", checkAuth?.checkAuth, categoryControllers?.find);

module.exports = category;
