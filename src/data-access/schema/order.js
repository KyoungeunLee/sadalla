const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    memberId: {
      // 회원 아이디
      type: String,
      required: true,
    },
    product: [
      {
        productId: {
          type: String,
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        count: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      // 금액
      type: Number,
      required: true,
    },
    zipcode: {
      // 배송지 우편번호
      type: String,
      required: true,
    },
    address: {
      // 베송지 주소
      type: String,
      required: true,
    },
  },
  {
    collection: "Order",
    timestamps: {
      createdAt: "orderedAt",
      updatedAt: "updatedAt",
    },
    versionKey: false,
  }
);

module.exports = orderSchema;
