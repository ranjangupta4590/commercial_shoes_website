const mongoose = require('mongoose');

const paySchema = new mongoose.Schema({

  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
},
  { timestaps: true }
);

const Payment = mongoose.model("Payment", paySchema);
module.exports = Payment;