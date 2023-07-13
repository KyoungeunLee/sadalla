const express = require("express");
const { productController } = require("../controller");
const { productMiddleware } = require("../middleware");

const productRouter = express.Router();

productRouter.get(
  "/:id",
  productMiddleware.checkProductIdFrom("params"),
  productController.getProduct
);

productRouter.get("/", productController.getProducts);

module.exports = productRouter;
