import { User } from "./User";
import { nanoid } from "nanoid";

// leaderboard/:page
const Leaderboard = ({ data }) => {
  let users = [...data.page];
  const questions = [];
  Object.keys(data.page[0].problems).forEach((key) => {
    questions.push(data.page[0].problems[key].problem_name);
  });
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-y dark:border-gray-700 dark:bg-slate-900/80">
                <tr className="border-r dark:border-gray-700">
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-l border-gray-200 dark:border-gray-700 dark:text-white"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-l border-gray-200 dark:border-gray-700 dark:text-white"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-l border-gray-200 dark:border-gray-700 dark:text-white"
                  >
                    Total Score
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left border-l border-gray-200 dark:border-gray-700 dark:text-white"
                  >
                    Total Time
                  </th>

                  {questions.map((_question, index) => {
                    return (
                      <>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-l border-gray-200 dark:border-gray-700 dark:text-white"
                        >
                          {index + 1}
                        </th>
                      </>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => <User key={nanoid()} user={user} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
