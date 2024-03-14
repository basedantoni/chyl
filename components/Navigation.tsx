import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div className="fixed bottom-0 hidden w-full justify-between bg-gradient-to-t from-black md:flex xl:px-24 xl:py-10">
        <Link className="font-semibold capitalize xl:text-2xl" href="/music">
          Music
        </Link>
        <Link className="font-semibold capitalize xl:text-2xl" href="/tour">
          Tour
        </Link>
        <Link className="font-semibold capitalize xl:text-2xl" href="/video">
          Video
        </Link>
        <Link className="font-semibold capitalize xl:text-2xl" href="/">
          Store
        </Link>
        <Link className="font-semibold capitalize xl:text-2xl" href="/">
          Laylo
        </Link>
      </div>
    </>
  );
}
