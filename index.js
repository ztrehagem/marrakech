const server = require('./server');
const redisUtil = require('./server/utils/redis');

server.start();

(async () => {
  const redis = redisUtil.createClient();
  await redis.setAsync('hogeKey', 'fugaVal');
  const reply = await redis.getAsync('hogeKey');
  console.log(reply);
  redis.quit();
})();
