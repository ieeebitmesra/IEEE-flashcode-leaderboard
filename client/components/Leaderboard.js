import { User } from "./User";
import { nanoid } from "nanoid";

// leaderboard/:page
const Leaderboard = ({ data }) => {
	let users = [...data.page];
	return (
		<div>{users.length > 0 && users.map((user) => <User key={nanoid()} user={user} />)}</div>
	);
};

export default Leaderboard;
