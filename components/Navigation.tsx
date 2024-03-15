"use client";

import Link from "next/link";
import LayloOverlay from "@/components/LayloOverlay";
import { useOverlay } from "@/context/LayloProvider";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Navigation() {
  const { toggleOverlay } = useOverlay();
  const [showNav, setShowNav] = useState(false);

  const handleLayloMobile = () => {
    setShowNav((previous) => !previous);
    toggleOverlay();
  };

  return (
    <>
      <LayloOverlay />

      {/* MOBILE */}
      <div className="absolute right-4 top-4 md:hidden">
        <Bars3Icon
          className="w-8"
          onClick={() => setShowNav((previous) => !previous)}
        />
      </div>

      {showNav && (
        <nav className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-black">
          <div className="absolute right-4 top-4">
            <XMarkIcon
              className="w-8"
              onClick={() => setShowNav((previous) => !previous)}
            />
          </div>
          <Link
            className="text-2xl font-semibold capitalize"
            href="/music"
            onClick={() => setShowNav((previous) => !previous)}
          >
            Music
          </Link>
          <Link
            className="text-2xl font-semibold capitalize"
            href="/tour"
            onClick={() => setShowNav((previous) => !previous)}
          >
            Tour
          </Link>
          <Link
            className="text-2xl font-semibold capitalize"
            href="/video"
            onClick={() => setShowNav((previous) => !previous)}
          >
            Video
          </Link>
          <Link
            className="text-2xl font-semibold capitalize"
            href="/"
            onClick={() => setShowNav((previous) => !previous)}
          >
            Store
          </Link>
          <button
            className="text-2xl font-semibold capitalize"
            onClick={handleLayloMobile}
          >
            Laylo
          </button>
        </nav>
      )}

      {/* DESKTOP */}
      <nav className="fixed bottom-0 hidden w-full justify-between bg-gradient-to-t from-black md:flex xl:px-24 xl:py-10">
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
        <button
          className="font-semibold capitalize xl:text-2xl"
          onClick={toggleOverlay}
        >
          Laylo
        </button>
      </nav>
    </>
  );
}
