const { memberDAO } = require("../data-access");

// 회원가입, 사용자 정보 저장
async function createMember({ email, pwd, name, phone, zipcode, address }) {
  const createMember = await memberDAO.create({
    email,
    pwd,
    name,
    phone,
    zipcode,
    address,
  });

  return createMember;
}

// 회원가입, 로그인시 이메일 체크
async function checkMember(email) {
  const member = await memberDAO.findOne({ email: email });
  return member;
}

// 사용자 정보 가져오기
async function getMember(id) {
  const member = await memberDAO.findOneById(id);
  return member;
}

// 사용자 정보 수정
async function updateMember(id, { email, pwd, name, phone, zipcode, address }) {
  const memberUpdate = await memberDAO.updateOne(id, {
    email,
    name,
    phone,
    zipcode,
    address,
  });
  return memberUpdate;
}

// 사용자 정보 삭제
async function deleteMember(id) {
  const deleteMember = await memberDAO.deleteOne(id);
  return deleteMember;
}

// 관리자 계정

const memberService = {
  createMember,
  checkMember,
  getMember,
  updateMember,
  deleteMember,
};

module.exports = memberService;
