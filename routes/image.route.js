const express = require("express");
const bodyParser = require("body-parser");
const imageController = require("../controllers/image.controllers");
const imageUploader = require("../helpers/image-uploader.helpers");
const checkAuth = require("../middleware/checkAuth.middleware");

const image = express.Router();
image.use(bodyParser.json());
image.use(bodyParser.urlencoded({ extended: true }));

image.post(
  "/uploads",
  checkAuth.checkAuth,
  imageUploader.upload.single("image"),
  imageController.upload
);

module.exports = image;
