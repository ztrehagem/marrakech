const express = require('express');
const path = require('path');
const expressSession = require('express-session');
const connectRedis = require('connect-redis');
const hoge = require('./controllers/api/hoge');
const redisUtil = require('./utils/redis');

const RedisStore = connectRedis(expressSession);
const publicPath = path.resolve('public');

const serveFile = (res, url) => {
  res.sendFile(path.join(publicPath, url), err => err && res.sendStatus(404));
};

const configRoutes = (app) => {
  // 全部のリクエストでまずここを通る
  app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}]`, req.method, req.url);
    next();
  });

  // /api配下へのリクエストはセッションを見る
  app.use('/api/*', expressSession({
    store: new RedisStore({ client: redisUtil.createClient() }),
    secret: 'hoge secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 150000 },
  }));

  // コントローラにルーティング
  app.use('/api/hoge', hoge);

  // ここまででマッチしないURLはpublic配下のファイルを配信
  app.get('*', (req, res) => serveFile(res, req.url));
};

exports.start = () => {
  const app = express();
  configRoutes(app);
  app.listen(process.env.PORT);
  console.log('listening');
};
