const express = require('express');
const router = express.Router();
const { getRepository } = require('../Controllers/repo.controller');
const { ERROR_MSG } = require('../constants/messages');

router.get('/:repo', async (req, res) => {
  try {
    const result = await getRepository(req.params.repo);
    res.status(result.status).send(result);
  } catch (err) {
    res.status(500).send(ERROR_MSG.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
