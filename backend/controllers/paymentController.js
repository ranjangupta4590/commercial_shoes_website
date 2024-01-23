
require("dotenv").config();
const Payment = require('../modals/paymentModal.js');
const Razorpay = require("razorpay");
const crypto =require('crypto');


//creating order
const orders = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_API_SECRET,
        });

        const options = {
            amount: Number(req.body.amount * 100),    //to convert it into rupees
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        // res.json(order);
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

//creating payment verification to execute order

const paymentVerification = async (req, res) => {
    // console.log(req.body);

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // Database comes here

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        res.redirect(
            `http://www.localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        );
    } else {
        res.status(400).json({
            success: false,
        });
    }


}


module.exports = { orders, paymentVerification };