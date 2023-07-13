const { orderDAO } = require("../data-access");
const { Order } = require("../data-access/model");

const orderService = {
  // 주문
  async createOrder({ memberId, product, totalPrice, zipcode, address }) {
    const createOrder = await orderDAO.create({
      memberId,
      product,
      totalPrice,
      zipcode,
      address,
    });
    return createOrder;
  },

  // 주문 번호로 하나의 주문 내역 가져오기
  async getOrder(id) {
    const order = await orderDAO.findOne(id);
    return order;
  },

  // 해당 아이디의 모든 주문 내역 가져오기
  async getOrderList(memberId) {
    const orders = await orderDAO.findMany(memberId);
    return orders;
  },

  // 주문 내역 수정(관리자)
  async updateOrder(id, { memberId, product, totalPrice, zipcode, address }) {
    const updateOrder = await orderDAO.updateOne(id, {
      memberId,
      product,
      totalPrice,
      zipcode,
      address,
    });
    return updateOrder;
  },

  // 주문 삭제
  async deleteOrder(id) {
    const deleteOrder = await orderDAO.deleteOne(id);
    return deleteOrder;
  },
};

module.exports = orderService;
