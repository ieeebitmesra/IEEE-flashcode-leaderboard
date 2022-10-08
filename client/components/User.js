import React from "react";

// user = {
//     "rank": 21,
//     "name": "mahakshah252432",
//     "total_score": 0.5,
//     "total_penalty": 117,
//     "problems": {
//          "solved_time",
//          "penalty" [failed attempts * problem_penalty]
//          "verdict"
//      }
// }
export const User = ({ user }) => {
	console.log(user);
	// console.log(Object.keys(user.problems)[0]);
	return (
		<>
			<div>
				<span>{user.rank} </span>
				<span>{user.name} </span>
				<span>{user.total_score} </span>
				<span>{user.total_penalty} </span>
			</div>
			<div>
				{Object.values(user.problems).map(
					({ solved_time, failed_attempts, problem_penalty, verdict }) => (
						<>
							<span>{solved_time === null ? "NA" : solved_time} </span>
							<span>{failed_attempts * problem_penalty} </span>
							<span>{verdict === null ? "NA" : verdict} </span>
							<br />
						</>
					)
				)}
				<br />
			</div>
		</>
	);
};
