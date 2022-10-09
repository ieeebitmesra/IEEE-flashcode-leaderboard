// yaha pe id specific data mangwana hai
// uss data se leaderboard call krdenge

import Leaderboard from "../../../components/Leaderboard.js";

export default function Home({ data }) {
  if (data.page != []) {
    // Data exists
    return (
      <div className="px-4 md:px-12 pt-8">
        <Leaderboard data={data} />
      </div>
    );
  }
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
  const res = await fetch(`http://localhost:8080/?page=1`);
  const data = await res.json();
  const numberOfPages = data.numberOfPages;
  for (let i = 1; i <= numberOfPages; i++) {
    paths.push({
      params: { id: i.toString() },
    });
  }
  return {
    paths,
    fallback: false,
  };
};
