const redis = require("redis");

module.exports = async function CacheFactory() {
  const redisClient = redis.createClient(6379);

  
  // redisClient.on('connect'     , () => console.log('connect'));
  // redisClient.on('ready'       , () => console.log('ready'));
  // redisClient.on('reconnecting', () => console.log('reconnecting'));
  // redisClient.on('error'       , () => console.log('error'));
  // redisClient.on('end'         , () => console.log('end'));

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
