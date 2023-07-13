const express = require("express");
const { memberController } = require("../controller");
const { memberMiddleware } = require("../middleware");

const memberRouter = express.Router();

// 회원가입
memberRouter.post(
  "/sign-up",
  memberMiddleware.checkCompleteSignUpForm("body"),
  memberController.postSignUp
);

// 로그인
memberRouter.post(
  "/log-in",
  memberMiddleware.checkCompleteLoginForm("body"),
  memberController.postLogin
);

// 마이페이지 - 조회
memberRouter.get(
  "/mypage",
  // memberMiddleware.checkLogin,
  memberController.checkLogin,
  memberController.getMember
);

// 마이페이지 - 수정
memberRouter.put(
  "/mypage/update",
  memberController.checkLogin,
  memberController.putMember
);

// 마이페이지 - 삭제
memberRouter.delete(
  "/mypage/delete",
  memberController.checkLogin,
  memberController.deleteMember
);

module.exports = memberRouter;
