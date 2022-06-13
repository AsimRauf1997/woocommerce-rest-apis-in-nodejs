const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require("dotenv").config();
const WooCommerce = new WooCommerceRestApi({
  url: `${process.env.WP_URL}`,
  consumerKey: `${process.env.WOO_CONSUMER_KEY}`,
  consumerSecret: `${process.env.WOO_CONSUMER_SECRET}`,
  wpAPI: true,
  version: "wc/v1",
});
const Naturals = new WooCommerceRestApi({
  url: `${process.env.NATURALS_URL}`,
  consumerKey: `${process.env.NATURALS_CONSUMER_KEY}`,
  consumerSecret: `${process.env.NATURALS_CONSUMER_SECRET}`,
  wpAPI: true,
  version: "wc/v1",
});
module.exports = {
  WooCommerce,
  Naturals,
};
