const express = require('express');
const path = require('path');
const hoge = require('./controllers/api/hoge');

const publicPath = path.resolve('public');
const serveFile = (res, url) => {
  res.sendFile(path.join(publicPath, url), err => err && res.sendStatus(404));
};

const router = module.exports = express.Router();

router.use('/api/hoge', hoge);

router.get('/', (req, res) => serveFile(res, '/index.html'));
router.get('*', (req, res) => serveFile(res, req.url));
