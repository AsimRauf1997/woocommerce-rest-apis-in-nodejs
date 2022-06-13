const { response } = require("express");
const { WooCommerce } = require("../utils/initilizations");

const getOrders = (req, res) => {
  WooCommerce.get("orders", (request, response) => {
    try {
      res.json(JSON.parse(response.body));
    } catch (error) {
      res.json(error);
    }
  });
};
const getSingleOrder = (req, res) => {
  const { id } = req.params;
  WooCommerce.get(`orders/${id}`, (request, response) => {
    try {
      res.status(200).json(JSON.parse(response.body));
    } catch (error) {
      res.json(error);
    }
  });
};
const addOrder = async (req, res) => {
  try {
    const params = JSON.parse(req.body.data);
    const { data } = await WooCommerce.post("orders", params);
    return res
      .status(201)
      .json({ msg: "Order Placed Successfully", data: data });
  } catch (error) {
    res.status(400).json({ msg: error.response.data.message });
  }
};
module.exports = {
  getOrders,
  getSingleOrder,
  addOrder,
};
// const line = data.line_items.map((x) => ({
//   name: x.name,
//   product_id: x.id ? x.id : x._id,
//   quantity: parseInt(x.quantity),
//   sku: x.sku,
//   price: x.price,
//   images: x.images,
// // }));
// const transformedData = {
//   billing: data.billing,
//   shipping: data.shipping,
//   line_items: [...line],
//   payment_method: data.payment_method,
// };
// console.log("transformedData", transformedData);
