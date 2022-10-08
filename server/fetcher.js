/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
const fetch = require("node-fetch-commonjs");
const cron = require("node-cron");
const CacheFactory = require("./cache");

const languageMultipliers = require("./language-multipliers.json");

let cache;
let problemList = [];

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
	const { total } = await getSubmissions(contestName, sessionCookie, 0, 1);
	const submissions = (await getSubmissions(contestName, sessionCookie, total)).models;
	return submissions.filter((submission) => submission.in_contest_bounds).reverse();
}

async function getProblemList(contestName, sessionCookie, limit) {
//   console.log("Environment variables: ", process.env.CONTEST_NAME, process.env.SESSION_COOKIE);

// https://www.hackerrank.com/rest/contests/ug2020-ieee-educational-1/judge_submissions/?limit=0
// {
// "models": [],
// "total": 583
// }
	const url = `https://www.hackerrank.com/rest/contests/${contestName}/challenges/?limit=${limit}`;
	const response = await fetch(url, {
		headers: {
			Cookie: `_hrank_session=${sessionCookie}`,
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const problemList = await response.json();
	return problemList;
}

async function getAllProblemList(contestName, sessionCookie) {
	const { total } = await getProblemList(contestName, sessionCookie, 0, 1);
	const problemList = (await getProblemList(contestName, sessionCookie, total)).models;
	return problemList.filter((problem) => problem.can_be_viewed);
}

function ProblemFactory(problem_name, problem_penalty = 10) {
	const verdict = null;
	const solved_time = null;
	const problem_score = null;
	const failed_attempts = 0;
	const lang = null;
	const lang_multiplier = null;
	const user_score = null;
	const user_penalty = null;

	return {
		problem_name,
		problem_penalty,
		verdict,
		solved_time,
		problem_score,
		failed_attempts,
		lang,
		lang_multiplier,
		user_score,
		user_penalty,
	};
}

function UserFactory(name) {
	let rank = null;
	let total_score = 0;
	let total_penalty = 0;
	const problems = {};
	const used_langs = new Set();

	for (const problem of problemList) {
		problems[problem.name] = ProblemFactory(problem.name);
	}

	function setRank(userRank) {
		rank = userRank;
	}

	function addSubmission(submission) {
		if (problems[submission.challenge.name].verdict === "Accepted") {
			return;
		}

		const problem_name = submission.challenge.name;
		if (submission.status !== "Accepted" || used_langs.has(submission.language)) {
			problems[problem_name].verdict = "Failed";
			problems[problem_name].failed_attempts++;
		} else {
			problems[problem_name].verdict = "Accepted";
			problems[problem_name].solved_time = Math.ceil(submission.time_from_start);

			problems[problem_name].problem_score = submission.score;
			problems[problem_name].lang = submission.language;
			used_langs.add(submission.language);

			if (!(submission.language in languageMultipliers)) {
				console.error(`${submission.language} multiplier not found!`);
			}

			problems[problem_name].lang_multiplier = languageMultipliers[submission.language];

			problems[problem_name].user_score =
				problems[problem_name].problem_score * problems[problem_name].lang_multiplier;

			total_score += problems[problem_name].user_score;

			problems[problem_name].user_penalty =
				problems[problem_name].solved_time +
				problems[problem_name].failed_attempts * problems[problem_name].problem_penalty;

			total_penalty += problems[problem_name].user_penalty;
		}
	}

	function getResult() {
		return {
			rank,
			name,
			total_score,
			total_penalty,
			problems,
		};
	}

	return {
		getResult,
		setRank,
		addSubmission,
	};
}

function generateRanklist(submissions) {
	submissions = submissions.filter((submission) => submission.status !== "Queued");

	const userList = {};
	submissions.forEach((submission) => {
		if (!userList[submission.hacker_username]) {
			userList[submission.hacker_username] = UserFactory(submission.hacker_username);
		}

		userList[submission.hacker_username].addSubmission(submission);
	});

	const ranklist = [];
	for (const username in userList) {
		ranklist.push(userList[username].getResult());
	}

	ranklist.sort((user1, user2) => {
		if (user1.total_score > user2.total_score) {
			return -1;
		}
		if (user1.total_score < user2.total_score) {
			return 1;
		}
		if (user1.total_penalty < user2.total_penalty) {
			return -1;
		}
		if (user1.total_penalty > user2.total_penalty) {
			return 1;
		}
		return 0;
	});

	let lastScore = -1;
	let lastPenalty = -1;
	let lastRank = 0;
	let numberOfPeopleWithCurrentRank = 1;
	for (const userNo in ranklist) {
      // ishan : 300, 70, 3
      // vishal : 300, 70, 3

      // lastRank = 3, numberOfPeopleWithCurrentRank = 2
      // lastScore = 300, lastPenalty = 70

      // sarvjot : 300, 80, _
      // score = 300, penalty = 70
		if (
			lastScore === ranklist[userNo].total_score &&
			lastPenalty === ranklist[userNo].total_penalty
		) {
      numberOfPeopleWithCurrentRank++;
		} else {
			lastRank += numberOfPeopleWithCurrentRank;
      numberOfPeopleWithCurrentRank = 1;
		}

		ranklist[userNo].rank = lastRank;

		lastScore = ranklist[userNo].total_score;
		lastPenalty = ranklist[userNo].total_penalty;
	}
	return ranklist;
}

function paginate(ranklist, countPerPage = 10) {
	const paginatedArray = [];
	let currentPage = [];

	for (const user of ranklist) {
		if (currentPage.length === countPerPage) {
			paginatedArray.push(currentPage);
			currentPage = [];
		}

		currentPage.push(user);
	}

	if (currentPage.length !== 0) paginatedArray.push(currentPage);

	return paginatedArray;
}

module.exports = async function scheduleFetcher() {
	cache = await CacheFactory();
	problemList = await getAllProblemList(process.env.CONTEST_NAME, process.env.SESSION_COOKIE);

	cron.schedule(
		"*/15 * * * * *",
		async () => {
			try {
				const submissions = await getAllSubmissions(
					process.env.CONTEST_NAME,
					process.env.SESSION_COOKIE
				);

				const ranklist = generateRanklist(submissions);
				const paginatedRanklist = paginate(ranklist);

				await cache.save("numberOfPages", paginatedRanklist.length);
				await Promise.all(
					paginatedRanklist.map((page, pageNo) =>
						cache.save(`pages:${Number(pageNo) + 1}`, page)
					)
				);
				await Promise.all(ranklist.map((user) => cache.save(`users:${user.name}`, user)));
			} catch (error) {
				console.error(error);
			}
		},
		{
			timezone: "Asia/Kolkata",
		}
	);
};
