const fetch = require("node-fetch-commonjs");
const cron = require("node-cron");
const CacheFactory = require("./cache");

const languageMultipliers = require("./language-multipliers.json");

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

async function getAllSubmissions(contestName, sessionCookie) {
  const total = (await getSubmissions(contestName, sessionCookie, 0, 1)).total;
  const submissions = (await getSubmissions(contestName, sessionCookie, total))
    .models;
  return submissions;
}

module.exports = async function scheduleFetcher() {
  cache = await CacheFactory();
  cron.schedule(
    "*/15 * * * * *",
    async () => {
      console.log(
        await getAllSubmissions(
          process.env.CONTEST_NAME,
          process.env.SESSION_COOKIE
        )
      );
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
};
