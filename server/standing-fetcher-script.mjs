import fetch from "node-fetch";

async function getSubmissions(contestName, sessionCookie, offset, limit) {
  const url = `https://www.hackerrank.com/rest/contests/${contestName}/judge_submissions/?offset=${offset}&limit=${limit}`;
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
  const limit = (await getSubmissions(contestName, sessionCookie, 0, 1)).total;
  const submissions = await getSubmissions(
    contestName,
    sessionCookie,
    0,
    limit
  );
  return submissions;
}

const submissions = await getAllSubmissions(
  process.env.CONTEST_NAME,
  process.env.SESSION_COOKIE
);
console.log(submissions);
