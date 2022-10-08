// yaha pe id specific data mangwana hai
// uss data se leaderboard call krdenge

import Leaderboard from "../../../components/Leaderboard.js";

export default function Home({ data }) {
	return (
		<div>
			<Leaderboard data={data} />
		</div>
	);
}

export const getStaticProps = async (context) => {
	const res = await fetch(`http://localhost:8080/?page=${context.params.id}`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
};

export const getStaticPaths = async () => {
	let paths = [];

	// hardcode
	let number_of_pages = 10;
	for (let i = 1; i <= number_of_pages; i++) {
		paths.push({
			params: { id: i.toString() },
		});
	}

	return {
		paths,
		fallback: false,
	};
};
