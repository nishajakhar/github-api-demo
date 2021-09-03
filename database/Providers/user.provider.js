const UserModel = require('../Models/user.model');

exports.findByUsername = async username => {
  return UserModel.findOne({ username })
    .lean()
    .exec();
};

exports.create = async data => {
  return UserModel.create(data);
};
