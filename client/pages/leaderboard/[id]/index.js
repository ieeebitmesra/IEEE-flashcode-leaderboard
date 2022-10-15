// yaha pe id specific data mangwana hai
// uss data se leaderboard call krdenge
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Leaderboard from "../../../components/Leaderboard.js";

export default function Home({ data }) {
  if (data.page != []) {
    // Data exists
    const router = useRouter();
    const curpage = router.query.id;
    const [isLocked, setLocked] = useState(false);
    const pages = [];
    for (let i = 0; i < data.numberOfPages; i++) {
      pages.push(i + 1);
    }
    useEffect(() => {
      const autoturn = setTimeout(() => {
        if (!isLocked) {
          if (data.numberOfPages == 1) {
            router.reload();
          } else if (curpage == data.numberOfPages) {
            router.push("/leaderboard/1");
          } else {
            router.push(`/leaderboard/${parseInt(curpage) + 1}`);
          }
        }
      }, 2000);

      return () => {
        clearTimeout(autoturn);
      };
    }, [router, isLocked]);
    return (
      <div className="sm:px-12 pt-8">
        <div className="font-bold text-gray-900 dark:text-white text-lg my-2 text-center">
          Page {curpage}
        </div>
        <Leaderboard data={data} />
        <div className="overflow-x-auto w-full flex justify-center align-middle items-center text-center mt-8 bg-green-400 dark:bg-green-700/60 text-gray-900 dark:text-white ">
          {!isLocked ? (
            <div
              className="px-4 py-2"
              onClick={() => {
                setLocked(!isLocked);
              }}
            >
              🔑 Page will change every 2 seconds
            </div>
          ) : (
            <>
              <div
                onClick={() => {
                  setLocked(!isLocked);
                }}
              >
                🔒 View is locked to the current page
              </div>
              {pages.map((page) => {
                // This is the nav at the bottom
                return (
                  <Link href={`/leaderboard/${page}`}>
                    <div
                      className={`${
                        page == curpage ? "border-4" : "border"
                      } border-white cursor-pointer inline-block text-sm font-medium text-gray-900 p-2 m-1 sm:px-3 sm:py-2 md:px-6 md:py-4 mx-2 rounded text-center dark:text-white`}
                    >
                      {page}
                    </div>
                  </Link>
                );
              })}
            </>
          )}
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
    //
    // revalidate: 10,
    //
    // Not reqd. anymore bcuz this is only going to be
    // on localhost at the event and in dev mode..
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
