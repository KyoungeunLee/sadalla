const { Order } = require("./model");
const util = require("../misc/util");

async function create({ memberId, product, totalPrice, zipcode, address }) {
  const order = new Order({ memberId, product, totalPrice, zipcode, address });
  await order.save();
  return order.toObject(); //POJO 형식으로 저장
}

async function findOne(id) {
  const order = await Order.findById(id).lean();
  return order;
}

async function findMany(memberId) {
  const orders = await Order.find({ memberId: memberId }).lean();
  return orders;
}

async function updateOne(id, order) {
  const sanitizedOrder = util.sanitizeObject({
    memberId: order.memberId,
    product: order.product,
    totalPrice: order.totalPrice,
    zipcode: order.zipcode,
    address: order.address,
  });
  const updatedOrder = await Order.findByIdAndUpdate(id, sanitizedOrder, {
    runValidators: true,
    new: true,
  }).lean();
  return updatedOrder;
}

async function deleteOne(id) {
  const deleteOrder = await Order.findByIdAndDelete(id).lean();
  return deleteOrder;
}

const orderDAO = {
  create,
  findOne,
  findMany,
  updateOne,
  deleteOne,
};

module.exports = orderDAO;
