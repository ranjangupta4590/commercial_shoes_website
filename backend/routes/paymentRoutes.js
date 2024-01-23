const express =require("express");
const {
  orders,
  paymentVerification,
} =require( "../controllers/paymentController.js");

const router = express.Router();

router.route("/orders").post(orders);

router.route("/paymentverification").post(paymentVerification);

module.exports = router;