const { productDAO } = require("../data-access");

const productService = {
  async createProduct({ name, price, image, desc, company, category }) {
    const createdProduct = await productDAO.create({
      name,
      price,
      image,
      desc,
      company,
      category,
    });
    return createdProduct;
  },

  //상품 찾기 (단일)
  async getProduct(id) {
    const product = await productDAO.findOne(id);
    return product;
  },
  //상품 찾기(여러개)
  async getProducts({ category }) {
    const products = await productDAO.findMany({ category });
    return products;
  },
  //상품 수정
  async updateProduct(id, { name, price, image, desc, company, category }) {
    const updatedProduct = await productDAO.updateOne(id, {
      name,
      price,
      image,
      desc,
      company,
      category,
    });
    return updatedProduct;
  },
  //상품 삭제 (단일)
  async deleteProduct(id) {
    const deletedProduct = await productDAO.deleteOne(id);
    return deletedProduct;
  },
  //상품 삭제 (여러개)
  async deleteProducts({ name, price, image, desc, company, category }) {
    const deletedProducts = await productDAO.deleteMany({
      name,
      price,
      image,
      desc,
      company,
      category,
    });
    return deletedProducts;
  },
};

module.exports = productService;
