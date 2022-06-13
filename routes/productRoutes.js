const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");
router.get("/", productController.getProducts);
router.get("/:name", productController.getSingleProduct);
module.exports = router;
