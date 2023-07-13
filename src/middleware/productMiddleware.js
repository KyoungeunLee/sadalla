const AppError = require("../misc/AppError");
const commonErrors = require("../misc/commonErrors");

//상품 등록 시, 내용이 잘 기입되었는지 확인
const checkCompleteProductFrom = (from) => (req, res, next) => {
  const { name, price, image, desc, company, category } = req[from];
  // console.log(req.body);
  // console.log(req[from]);
  // console.log(image);
  //상품명이 없을 때
  if (name === undefined || name === null || name === "") {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 상품명을 작성해주세요.`
      )
    );
    return;
  }
  //상품 가격이 없을 때
  if (price === undefined || price === null || price === "") {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 상품 가격을 작성해주세요.`
      )
    );
    return;
  }
  //상품 이미지가 없을 때
  if (req.file === undefined || req.file === null || req.file === "") {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 상품 이미지를 작성해주세요.`
      )
    );
    return;
  }
  //상품 설명이 없을 때
  if (desc === undefined || desc === null || desc === "") {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 상품 설명을 작성해주세요.`
      )
    );
    return;
  }
  //상품 제조사가 없을 때
  if (company === undefined || company === null || company === "") {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 상품 제조사를 작성해주세요.`
      )
    );
    return;
  }
  //상품 카테고리가 없을 때
  if (category === undefined || category === null || category === "") {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 상품 카테고리를 설정해주세요.`
      )
    );
    return;
  }
  next();
};

//ID를 찾을 수 없을 때
const checkProductIdFrom = (from) => (req, res, next) => {
  const { id } = req[from];
  if (id === undefined) {
    next(
      new AppError(commonErrors.inputError, 400, `${from}: id는 필수값입니다.`)
    );
    return;
  }
  next();
};

//작성 항목이 비어있을 때
const checkMinProductConditionFrom = (from) => (req, res, next) => {
  const { name, price, image, desc, company, category } = req[from];
  if (
    name === undefined &&
    price === undefined &&
    image === undefined &&
    desc === undefined &&
    company === undefined &&
    category === undefined
  ) {
    next(
      new AppError(
        commonErrors.inputError,
        400,
        `${from}: 내용을 작성해주세요. `
      )
    );
    return;
  }
  next();
};

module.exports = {
  checkCompleteProductFrom,
  checkProductIdFrom,
  checkMinProductConditionFrom,
};
