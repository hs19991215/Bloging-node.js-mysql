const express = require("express");
const postControllers = require("../controllers/post.controllers");
const bodyParser = require("body-parser");
const checkAuth = require("../middleware/checkAuth.middleware");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.post("/", checkAuth?.checkAuth, postControllers.save);
router.get("/:id", checkAuth?.checkAuth, postControllers.show);
router.get("/", checkAuth?.checkAuth, postControllers.showall);
router.put("/:id/:userId", checkAuth?.checkAuth, postControllers.update);
router.delete("/:id/:userId", checkAuth?.checkAuth, postControllers.destroy);

module.exports = router;
