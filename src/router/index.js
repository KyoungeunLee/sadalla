const express = require("express");
const postRouter = require("./postRouter");
const productRouter = require("./productRouter");
const orderRouter = require("./orderRouter");
const adminRouter = require("./adminRouter");
const memberRouter = require("./memberRouter");

const v1Router = express.Router();

v1Router.use("/posts", postRouter);
v1Router.use("/products", productRouter);
v1Router.use("/orders", orderRouter);
v1Router.use("/admin", adminRouter);
v1Router.use("/auth", memberRouter);

module.exports = {
  v1: v1Router,
};
