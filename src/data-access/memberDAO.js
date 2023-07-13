const { Member } = require("./model");
const util = require("../misc/util");

async function create({ email, pwd, name, phone, zipcode, address }) {
  const member = new Member({ email, pwd, name, phone, zipcode, address });
  await member.save();
  return member.toObject();
}

async function findOneById(id) {
  const member = await Member.findById(id).lean();
  return member;
}

async function findOne(data) {
  const member = await Member.findOne(data).lean();
  return member;
}

async function updateOne(id, member) {
  const sanitizedMember = util.sanitizeObject({
    email: member.email,
    name: member.name,
    phone: member.phone,
    zipcode: member.zipcode,
    address: member.address,
  });

  const updateMember = await Member.findByIdAndUpdate(id, sanitizedMember, {
    runValidators: true,
    new: true,
  }).lean();
  return updateMember;
}

async function deleteOne(id) {
  const deleteMember = await Member.findByIdAndDelete(id).lean();
  return deleteMember;
}

const memberDAO = {
  create,
  findOneById,
  findOne,
  updateOne,
  deleteOne,
};

module.exports = memberDAO;
