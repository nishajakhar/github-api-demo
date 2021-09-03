const axios = require('axios');
const moment = require('moment');

const { SUCCESS_MSG, ERROR_MSG } = require('../constants/messages');
const { findByUsername, create } = require('../database/Providers/user.provider');

exports.getUser = async username => {
  try {
    const user = await findByUsername(username);
    user.memberSince = moment(new Date(user.memberSince)).format('DD MMM YYYY');
    if (user) return { message: SUCCESS_MSG.USER_GET_SUCCESS, data: user, type: 'database', status: 200 };

    const response = await axios.get(`https://api.github.com/users/${username}`);
    if (!response || response.status !== 200) return ERROR_MSG.INTERNAL_SERVER_ERROR;
    let data = {
      username: response.data.login,
      email: '',
      image: response.data.avatar_url,
      github_url: response.data.url,
      followers: response.data.followers,
      followingCount: response.data.following,
      repoCount: response.data.public_repos,
      memberSince: new Date(response.data.created_at),
    };
    const newUser = await create(data);
    data.memberSince = moment(data.memberSince).format('DD MMM YYYY');
    return { message: SUCCESS_MSG.USER_GET_SUCCESS, data: data, status: 200 };
  } catch (err) {
    return ERROR_MSG.INTERNAL_SERVER_ERROR;
  }
};
