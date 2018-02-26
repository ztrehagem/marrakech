const uuid = require('uuid/v4');
const redisUtil = require('../utils/redis');

const KEY_PREFIX = 'chat:';
const TTL = `${1 * 60 * 60}`; // 1 hour

const keyFromId = id => `${KEY_PREFIX}${id}`;

module.exports = class ChatRoom {
  constructor(id) {
    this.id = id;
  }

  static async index() {
    const redis = redisUtil.createClient();

    try {
      const keys = await redis.keysAsync(keyFromId('*'));
      const ids = keys.map(key => key.substr(KEY_PREFIX.length));
      return ids;
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      redis.quit();
    }
  }

  static async new(user) {
    const redis = redisUtil.createClient();

    try {
      const id = uuid();
      // TODO watchして被ってないか確かめる
      const key = keyFromId(id);
      await redis.multi().sadd(key, user.id).expire(key, TTL).execAsync();
      return new ChatRoom(id);
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      redis.quit();
    }
  }

  static async get(id) {
    const redis = redisUtil.createClient();

    try {
      const key = keyFromId(id);
      const exists = await redis.keysAsync(key);
      return (!exists || !exists.length) ? null : new ChatRoom(id);
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      redis.quit();
    }
  }

  async join(user) {
    const redis = redisUtil.createClient();

    try {
      await redis.multi().sadd(this.key, user.id).expire(this.key, TTL).execAsync();
      return true;
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      redis.quit();
    }
  }

  async leave(user) {
    const redis = redisUtil.createClient();

    try {
      await redis.multi().srem(this.key, user.id).expire(this.key, TTL).execAsync();
    } catch (e) {
      throw e;
    } finally {
      redis.quit();
    }
  }

  async touch() {
    const redis = redisUtil.createClient();

    try {
      await redis.expireAsync(this.key, TTL);
    } catch (e) {
      throw e;
    } finally {
      redis.quit();
    }
  }

  get key() {
    return keyFromId(this.id);
  }
}
