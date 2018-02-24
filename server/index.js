const http = require('http');
const express = require('express');
const expressSession = require('express-session');
const connectRedis = require('connect-redis');
const socketIO = require('socket.io');
const router = require('./router');
const socket = require('./socket');
const redisUtil = require('./utils/redis');

const RedisStore = connectRedis(expressSession);
const session = expressSession({
  store: new RedisStore({ client: redisUtil.createClient() }),
  secret: 'hoge secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 150000 },
});
const logger = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}]`, req.method, req.url);
  next();
};

const app = express();
const server = http.Server(app);
const io = socketIO(server);

socket.config(io);

app.use(logger);
app.use('/api/*', session);
app.use(router);

server.listen(process.env.PORT);

console.log('listening');
