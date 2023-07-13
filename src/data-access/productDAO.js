const { Product } = require("./model");
const util = require("../misc/util");

const productDAO = {
  async create({ name, price, image, desc, company, category }) {
    const productList = new Product({
      name,
      price,
      image,
      desc,
      company,
      category,
    });
    await productList.save();
    return productList.toObject();
  },
  //상품 하나만 찾기
  async findOne(id) {
    const plainProduct = await Product.findById(id).lean();
    return plainProduct;
  },
  //필터를 통해 여러 상품 찾기
  async findMany(filter) {
    const sanitizedFilter = util.sanitizeObject({
      category: filter.category, //카테고리 필터로 상품 찾기
    });
    const plainProduct = await Product.find(sanitizedFilter).lean();
    return plainProduct;
  },

  //상품 내용 수정
  async updateOne(id, toUpdate) {
    const sanitizedToUpdate = util.sanitizeObject({
      name: toUpdate.name,
      price: toUpdate.price,
      image: toUpdate.image,
      desc: toUpdate.desc,
      company: toUpdate.company,
      category: toUpdate.category,
    });
    const plainUpdatedProduct = await Product.findByIdAndUpdate(
      id,
      sanitizedToUpdate,
      {
        runValidators: true,
        new: true,
      }
    ).lean();
    return plainUpdatedProduct;
  },

  //상품(단일) 지우기
  async deleteOne(id) {
    const plainDeletedProduct = await Product.findByIdAndDelete(id).lean();
    return plainDeletedProduct;
  },

  //상품(여러개) 지우기
  async deleteMany(condition) {
    const sanitizedCondition = util.sanitizeObject({
      name: condition.name,
      price: condition.price,
      image: condition.image,
      desc: condition.desc,
      company: condition.company,
      category: condition.category,
    });
    const plainDeletedProducts = await Product.deleteMany(
      sanitizedCondition
    ).lean();
    return plainDeletedProducts;
  },
};

module.exports = productDAO;
