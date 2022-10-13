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
  return (
    <tr className="border-b border-r dark:border-gray-700 dark:bg-slate-900/20">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-l border-gray-200 dark:border-gray-700 dark:text-white ">
        {user.rank}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l border-gray-200 dark:border-gray-700 dark:text-white">
        {user.name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l border-gray-200 dark:border-gray-700 dark:text-white">
        {user.total_score}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l border-gray-200 dark:border-gray-700 dark:text-white">
        {user.total_penalty}
      </td>
      {Object.values(user.problems).map(
        ({ solved_time, failed_attempts, problem_penalty, verdict }) => (
          <>
            <td
              className={`text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l dark:border-gray-700 text-center dark:text-white ${
                verdict == "Accepted" && "bg-green-400 dark:bg-green-700/60"
              } ${verdict == "Failed" && "bg-red-300 dark:bg-red-600/60"}`}
            >
              {solved_time === null
                ? failed_attempts == 0
                  ? "NA"
                  : problem_penalty * failed_attempts
                : `${solved_time} + ${problem_penalty * failed_attempts}`}{" "}
            </td>
          </>
        )
      )}
    </tr>
  );
};
