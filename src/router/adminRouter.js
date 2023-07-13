const path = require("path");
const express = require("express");
const { productController } = require("../controller");
const { productMiddleware } = require("../middleware");
const { orderController } = require("../controller");
const { orderMiddleware } = require("../middleware");
const { memberController } = require("../controller");
const { memberMiddleware } = require("../middleware");
const multer = require("multer");

const adminRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}${path.sep}uploads`);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

// 관리자 로그인
adminRouter.post(
  "/log-in",
  memberMiddleware.checkCompleteLoginForm("body"),
  memberController.postLogin
);

//상품
adminRouter.get(
  "/products",
  memberController.checkLogin,
  memberController.checkAdmin,
  productController.getProducts
);

adminRouter.post(
  "/products",
  memberController.checkLogin,
  memberController.checkAdmin,
  upload.single("image"),
  productMiddleware.checkCompleteProductFrom("body"),
  productController.postProduct
);

adminRouter.get(
  "/products/:id",
  memberController.checkLogin,
  memberController.checkAdmin,
  productMiddleware.checkProductIdFrom("params"),
  productController.getProduct
);

adminRouter.put(
  "/products/:id",
  memberController.checkLogin,
  memberController.checkAdmin,
  productMiddleware.checkProductIdFrom("params"),
  productMiddleware.checkMinProductConditionFrom("body"),
  productController.putProduct
);

adminRouter.delete(
  "/products/:id",
  memberController.checkLogin,
  memberController.checkAdmin,
  productMiddleware.checkProductIdFrom("params"),
  productController.deleteProduct
);

adminRouter.delete(
  "/products",
  memberController.checkLogin,
  memberController.checkAdmin,
  productMiddleware.checkMinProductConditionFrom("body"),
  productController.deleteProducts
);

//주문 관련
adminRouter.post(
  "/orders",
  memberController.checkLogin,
  memberController.checkAdmin,
  orderMiddleware.checkCompleteOrderForm("body"),
  orderController.postOrder
);

adminRouter.get(
  "/orders",
  memberController.checkLogin,
  memberController.checkAdmin,
  orderController.getOrderList
);

adminRouter.get(
  "/orders/:id",
  memberController.checkLogin,
  memberController.checkAdmin,
  orderMiddleware.checkOrderIdFrom("params"),
  orderController.getOrder
);

adminRouter.put(
  "/orders/:id",
  memberController.checkLogin,
  memberController.checkAdmin,
  orderMiddleware.checkOrderIdFrom("params"),
  orderController.putOrder
);

adminRouter.delete(
  "/orders/:id",
  memberController.checkLogin,
  memberController.checkAdmin,
  orderController.deleteOrder
);

module.exports = adminRouter;
