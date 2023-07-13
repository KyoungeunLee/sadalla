const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    email: {
      //로그인 할때 id, 회원가입용 id
      type: String,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    collection: "Member",
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    versionKey: false,
  }
);

module.exports = memberSchema;
