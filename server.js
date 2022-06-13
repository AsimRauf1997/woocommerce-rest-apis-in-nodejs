const express = require("express");
const app = express();
const cors = require("cors");
const { WooCommerce } = require("./utils/initilizations");
const porductRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");
const naturalsRoute = require("./routes/naturalsRoutes");
const userRoute = require("./routes/userRoutes");
const { connectDB } = require("./utils/db");
const axios = require("axios");
require("dotenv").config();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/products", porductRoute);
app.use("/naturals", naturalsRoute);
app.use("/orders", orderRoute);
app.use("/user", userRoute);
app.use("/", async (req, res) => {
  const { data } = await axios.get(process.env.DARAZ_URL);
  res.json(data);
});
app.listen(process.env.PORT, () => {
  console.log(`server Listening at Port ${process.env.PORT}`);
});
