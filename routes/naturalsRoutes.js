const express = require("express");
const router = express.Router();
const naturalsController = require("../controllers/naturalController");
router.route("/").get(naturalsController.getNaturalsProducts);
router.route("/").post(naturalsController.addProduct);
module.exports = router;
