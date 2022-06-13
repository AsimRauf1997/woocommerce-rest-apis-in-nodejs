const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderControllers");
router.get("/", orderController.getOrders);
router.get("/:id", orderController.getSingleOrder);
router.route("/").post(orderController.addOrder);

module.exports = router;
