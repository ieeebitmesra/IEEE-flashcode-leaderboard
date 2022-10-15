import { useRouter } from "next/router";
import { useEffect } from "react";
export default function FourOhFour() {
  const router = useRouter();

  useEffect(() => {
    const autoturn = setTimeout(() => {
      router.reload();
    }, 2000);

    return () => {
      clearTimeout(autoturn);
    };
  }, [router]);
  return (
    <>
      <h1 className="text-8xl w-screen items-center text-center text-white font-bold justify-center mt-48">
        Flashcode Finale 🏆
      </h1>
      <h1 className="text-6xl w-screen items-center text-center text-white font-bold justify-center mt-48">
        hackerrank.com/flashcode-finale
      </h1>
    </>
  );
}
