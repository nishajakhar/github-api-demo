const express = require('express');
const router = express.Router();
const { getUser } = require('../Controllers/user.controller');
const { ERROR_MSG } = require('../constants/messages');
router.get('/:username', async (req, res) => {
  try {
    const result = await getUser(req.params.username);
    res.status(result.status).send(result);
  } catch (err) {
    res.status(500).send(ERROR_MSG.INTERNAL_SERVER_ERROR);
  }
});

module.exports = router;
