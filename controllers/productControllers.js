const { WooCommerce } = require("../utils/initilizations");
const getProducts = async (req, res) => {
  // const { sku } = req.query;
  // const { data } = await WooCommerce.get(`products?sku=${sku}`);
  // const response = await WooCommerce.delete(`products/${data[0].id}`);
  // res.json(response.data);
  try {
    const { data } = await WooCommerce.get("products");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.resposne.data.message);
  }
};
const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const params = req.query;
  console.log(res.query);
  // WooCommerce.get(`products/${id}`, (request, response) => {
  //   try {
  //     res.status(200).json(JSON.parse(response.body));
  //   } catch (error) {
  //     res.json(error);
  //   }
  // });
};
module.exports = {
  getProducts,
  getSingleProduct,
};
