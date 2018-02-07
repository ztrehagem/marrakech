const express = require('express');

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.send('this is hoge2');
});
