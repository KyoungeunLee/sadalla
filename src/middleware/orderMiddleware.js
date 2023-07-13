const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");

const checkCompleteOrderForm = (from) => (req, res, next) => {
  const { memberId, product, totalPrice, zipcode, address } = req[from];
  if (memberId === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 로그인이 필요합니다.`
      )
    );
    return;
  }
  if (product === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 결제할 상품을 선택하세요.`
      )
    );
    return;
  }
  if (zipcode === undefined) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 우편번호를 입력하세요.`
      )
    );
    return;
  }
  if (address === undefined) {
    next(
      new AppError(commonErrors.inputError, 400, `${from}: 주소를 입력하세요.`)
    );
    return;
  }
  next();
};

// 주문번호 확인
const checkOrderIdFrom = (from) => (req, res, next) => {
  const { id } = req[from];
  if (id === undefined) {
    next(
      new AppError(commonErrors, 400, `${from}: 유효하지 않은 주문번호입니다.`)
    );
  }
  next();
};

module.exports = {
  checkCompleteOrderForm,
  checkOrderIdFrom,
};
