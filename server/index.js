const express = require('express');
const path = require('path');
const hoge = require('./controllers/api/hoge');

const publicPath = path.resolve('public');

const serveFile = (res, url) => {
  res.sendFile(path.join(publicPath, url), err => err && res.sendStatus(404));
};

const configRoutes = (app) => {
  // 全部のリクエストでまずここを通る
  app.use((req, res, next) => {
    console.log('reqested', req.url);
    next();
  });

  // コントローラにルーティング
  app.use('/api/hoge', hoge);

  // ここまででマッチしないURLかつ拡張子を持つものはpublic配下のファイルを配信
  app.get(/.+\.\w+$/, (req, res) => serveFile(res, req.url));

  // ここまででマッチしないURLはindex.htmlを配信
  app.all('*', (req, res) => serveFile(res, '/index.html'));
};

exports.start = () => {
  const app = express();
  configRoutes(app);
  app.listen(process.env.PORT);
  console.log('listening');
};
