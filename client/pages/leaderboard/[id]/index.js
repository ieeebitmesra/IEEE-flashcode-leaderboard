// yaha pe id specific data mangwana hai
// uss data se leaderboard call krdenge
import Link from "next/link";
import Leaderboard from "../../../components/Leaderboard.js";

export default function Home({ data }) {
  if (data.page != []) {
    // Data exists
    const pages = [];
    for (let i = 0; i < data.numberOfPages; i++) {
      pages.push(i + 1);
    }
    return (
      <div className="sm:px-12 pt-8">
        <Leaderboard data={data} />
        <div className="overflow-x-auto w-full flex justify-center mt-8">
          {pages.map((page) => {
            return (
              <Link href={`/leaderboard/${page}`}>
                <div className="cursor-pointer inline-block text-sm font-medium text-gray-900 p-2 sm:px-3 sm:py-2 md:px-6 md:py-4 bg-green-400 dark:bg-green-700/60 mx-2 rounded text-center dark:text-white">
                  {page}
                </div>
              </Link>
            );
          })}
        </div>
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
    // Revalidate ie re-fetch the data at max once in every 10 seconds,
    // on any request
    revalidate: 10,
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
