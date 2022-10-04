const fetch = require("node-fetch-commonjs");
const cron = require("node-cron");
const CacheFactory = require("./cache");

let cache;

async function getSubmissions(contestName, sessionCookie, limit) {
  const url = `https://www.hackerrank.com/rest/contests/${contestName}/judge_submissions/?limit=${limit}`;
  const response = await fetch(url, {
    headers: {
      Cookie: `_hrank_session=${sessionCookie}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

async function saveAllSubmissionsToCache(contestName, sessionCookie) {
  const oldSubmissionCount = (await cache.get("submission-count")) || 0;
  const oldSubmissions = (await cache.get("submissions")) || [];

  const total = (await getSubmissions(contestName, sessionCookie, 0, 1)).total;
  const limit = total - oldSubmissionCount;

  let newSubmissions = [];
  if (limit != 0) {
    newSubmissions = (await getSubmissions(contestName, sessionCookie, limit))
      .models;
  }

  console.log(newSubmissions);
  const submissions = newSubmissions.concat(oldSubmissions);
  await cache.save("submissions", submissions);
  await cache.save("submission-count", total);
}

module.exports = async function scheduleFetcher() {
  cache = await CacheFactory();
  cron.schedule(
    "*/15 * * * * *",
    async () => {
      await saveAllSubmissionsToCache(
        process.env.CONTEST_NAME,
        process.env.SESSION_COOKIE
      );
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
};
