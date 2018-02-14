const express = require('express');

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.send(`your value is ${req.session.val}`);
});

router.post('/', (req, res) => {
  const val = req.query.val;
  req.session.val = val;
  res.send(`set your value to ${val}`);
});
