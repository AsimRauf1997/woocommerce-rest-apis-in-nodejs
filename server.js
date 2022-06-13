const express = require("express");
const app = express();
const cors = require("cors");
const porductRoute = require("./routes/productRoutes");
const orderRoute = require("./routes/orderRoutes");
const naturalsRoute = require("./routes/naturalsRoutes");
const userRoute = require("./routes/userRoutes");
const { connectDB } = require("./utils/db");
require("dotenv").config();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/products", porductRoute);
app.use("/naturals", naturalsRoute);
app.use("/orders", orderRoute);
app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`server Listening at Port ${process.env.PORT}`);
});
