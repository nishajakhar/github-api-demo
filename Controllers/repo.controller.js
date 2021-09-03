const axios = require('axios');
const { SUCCESS_MSG, ERROR_MSG } = require('../constants/messages');

exports.getRepository = async repo => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${repo}`);
    if (!response || response.status !== 200) return ERROR_MSG.INTERNAL_SERVER_ERROR;
    if (response.data.items.length == 0) return ERROR_MSG.DATA_NOT_FOUND;

    const data = [];
    await Promise.all(
      response.data.items.map(item => {
        data.push({
          repoName: item.name,
          ownerName: item.owner.login,
          description: item.description,
          stars: item.stargazers_count,
          url: item.clone_url,
        });
      }),
    );
    return { message: SUCCESS_MSG.REPO_FETCH_SUCCESS, data: data, status: 200 };
  } catch (err) {
    return ERROR_MSG.INTERNAL_SERVER_ERROR;
  }
};
