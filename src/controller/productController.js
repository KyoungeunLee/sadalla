const { productService } = require("../service");
const util = require("../misc/util");

const productController = {
  //상품 등록
  async postProduct(req, res, next) {
    try {
      const { name, price, image, desc, company, category } = req.body;
      const imagePath = req.file.filename;
      console.log(req.file);
      const product = await productService.createProduct({
        name,
        price,
        image: imagePath ?? "default_image.png",
        desc,
        company,
        category,
      });
      res.status(201).json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },
  //상품 데이터 받아오기
  async getProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.getProduct(id);
      res.json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },
  async getProducts(req, res, next) {
    try {
      const { name, price, image, desc, company, category } = req.query;
      const products = await productService.getProducts({
        name,
        price,
        image,
        desc,
        company,
        category,
      });
      res.json(util.buildResponse(products));
    } catch (error) {
      next(error);
    }
  },
  //상품 수정
  async putProduct(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price, image, desc, company, category } = req.body;
      const product = await productService.updateProduct(id, {
        name,
        price,
        image,
        desc,
        company,
        category,
      });
      res.json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },
  //상품 삭제
  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productService.deleteProduct(id);
      res.json(util.buildResponse(product));
    } catch (error) {
      next(error);
    }
  },
  async deleteProducts(req, res, next) {
    try {
      const { name, category } = req.body;
      const products = await productService.deleteProducts({
        name,
        price,
        image,
        desc,
        company,
        category,
      });
      res.json(util.buildResponse(products));
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;
