
require("dotenv").config();
const express =require("express");
const cors =require("cors");
const connectDB = require("./db.js");
const paymentRoute =require('./routes/paymentRoutes.js');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);