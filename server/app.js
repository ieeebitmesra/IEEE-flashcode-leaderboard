const sheduleFetcher = require("./fetcher.js");
const CacheFactory = require("./cache");

(async () => {
  const cache = await CacheFactory();
  await cache.clear();
  await sheduleFetcher();
})();
