const { Naturals, WooCommerce } = require("../utils/initilizations");

const getNaturalsProducts = async (req, res) => {
  try {
    const { status } = req.query;
    const { data } = await Naturals.get(`products`);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.response.data });
  }
};
const addProduct = async (req, res) => {
  try {
    const params = JSON.parse(req.body.data);
    const { data } = await WooCommerce.post("products", params);
    res.status(201).json({ msg: "Added" });
  } catch (error) {
    res.status(400).json({ msg: error.response.data.message });
  }
};
module.exports = {
  getNaturalsProducts,
  addProduct,
};
