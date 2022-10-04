const redis = require("redis");

module.exports = async function CacheFactory() {
  const redisClient = redis.createClient();
  await redisClient.connect();

  async function save(key, value) {
    await redisClient.set(key, JSON.stringify(value));
  }

  async function get(key) {
    return JSON.parse(await redisClient.get(key));
  }

  async function clear() {
    await redisClient.flushAll();
  }

  return { save, get, clear };
};
