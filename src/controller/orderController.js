const { orderService } = require("../service");
const util = require("../misc/util");

const orderController = {
  async postOrder(req, res, next) {
    try {
      const { memberId, product, totalPrice, zipcode, address } = req.body;
      const order = await orderService.createOrder({
        memberId,
        product,
        totalPrice,
        zipcode,
        address,
      });
      res.status(201).json(util.buildResponse(order));
    } catch (err) {
      next(err);
    }
  },

  async getOrder(req, res, next) {
    try {
      const { id } = req.params;
      const order = await orderService.getOrder(id);
      res.json(util.buildResponse(order));
    } catch (err) {
      next(err);
    }
  },

  async getOrderList(req, res, next) {
    try {
      const { member } = res.locals;
      // const memberId = "aaa"; //memberId 값이 유효한지 확인 -> 로그인 여부로 확인
      const memberId = member.mid;
      const orderList = await orderService.getOrderList(memberId);
      res.json(util.buildResponse(orderList));
    } catch (err) {
      next(err);
    }
  },

  async putOrder(req, res, next) {
    try {
      const { id } = req.params;
      const { memberId, product, totalPrice, zipcode, address } = req.body;
      const order = await orderService.updateOrder(id, {
        memberId,
        product,
        totalPrice,
        zipcode,
        address,
      });
      res.json(util.buildResponse(order));
    } catch (err) {
      next(err);
    }
  },

  async deleteOrder(req, res, next) {
    try {
      const { id } = req.params;
      const order = await orderService.deleteOrder(id);
      res.json(util.buildResponse(order));
    } catch (err) {
      next(err);
    }
  },
};

module.exports = orderController;
