const uuid = require('uuid/v4');
const redisUtil = require('../utils/redis');

const KEY_PREFIX = 'chat:';

module.exports = class ChatRoom {
  constructor(id) {
    this.id = id;
  }

  static async index() {
    const redis = redisUtil.createClient();

    try {
      const keys = await redis.keysAsync(`${KEY_PREFIX}*`);
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
      await redis.saddAsync(`${KEY_PREFIX}${id}`, user.id);
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
      const exists = await redis.keysAsync(`${KEY_PREFIX}${id}`);
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
      await redis.saddAsync(`${KEY_PREFIX}${this.id}`, user.id);
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
      await redis.sremAsync(`${KEY_PREFIX}${this.id}`, user.id);
    } catch (e) {
      throw e;
    } finally {
      redis.quit();
    }
  }
}
