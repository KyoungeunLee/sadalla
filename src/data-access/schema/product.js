const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    //상품 이름
    name: {
      type: String,
      required: true,
    },
    //상품 가격
    price: {
      type: Number,
      required: true,
    },
    //상품 이미지
    image: {
      type: String,
    },
    //상품 설명
    desc: {
      type: String,
    },
    //상품 제조사
    company: {
      type: String,
    },
    //상품 카테고리
    category: {
      type: String,
    },
  },
  {
    collection: "Product",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = productSchema;
