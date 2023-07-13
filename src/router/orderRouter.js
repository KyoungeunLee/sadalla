const express = require("express");
const { orderController } = require("../controller");
const { memberController } = require("../controller");
const { orderMiddleware } = require("../middleware");

const orderRouter = express.Router();

// 주문
orderRouter.post(
  "/",
  memberController.checkLogin,
  orderMiddleware.checkCompleteOrderForm("body"),
  orderController.postOrder
);

// 해당 아이디의 모든 주문 내역 가져오기
orderRouter.get("/", memberController.checkLogin, orderController.getOrderList);

// 주문 번호로 하나의 주문 내역 가져오기
orderRouter.get(
  "/:id",
  memberController.checkLogin,
  orderMiddleware.checkOrderIdFrom("params"),
  orderController.getOrder
);

// 주문 내역 삭제 -> admin 에서도 삭제 가능하도록!
orderRouter.delete(
  "/:id",
  memberController.checkLogin,
  orderController.deleteOrder
);
module.exports = orderRouter;
