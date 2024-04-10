"use client";

import Link from "next/link";
import LayloOverlay from "@/components/LayloOverlay";
import { useOverlay } from "@/context/LayloProvider";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Socials from "./Socials";

export default function Navigation() {
  const { toggleOverlay, isOverlayVisible } = useOverlay();
  const [showNav, setShowNav] = useState(false);

  const handleLayloMobile = () => {
    setShowNav((previous) => !previous);
    toggleOverlay();
  };

  return (
    <>
      <LayloOverlay />

      {/* MOBILE */}
      {!isOverlayVisible && (
        <div className="absolute right-4 top-4 md:hidden">
          <Bars3Icon
            className="w-8"
            onClick={() => setShowNav((previous) => !previous)}
          />
        </div>
      )}

      {showNav && (
        <nav className="animate-slideInDown absolute left-0 top-0 flex h-screen w-screen gap-24 flex-col items-center justify-center bg-black">
          <Link
            className="font-moki absolute top-24 w-full text-center text-5xl"
            href="/"
            onClick={() => setShowNav((previous) => !previous)}
          >
            CHYL
          </Link>

          <div className="absolute right-4 top-4">
            <XMarkIcon
              className="w-8"
              onClick={() => setShowNav((previous) => !previous)}
            />
          </div>
          <ul className="flex flex-col items-center gap-10">
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
              Merch
            </Link>
            <button
              className="text-2xl font-semibold capitalize"
              onClick={handleLayloMobile}
            >
              Join the Team
            </button>
          </ul>

          <Socials />
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
          Merch
        </Link>
        <button
          className="font-semibold capitalize xl:text-2xl"
          onClick={toggleOverlay}
        >
          Join the Team
        </button>
      </nav>
    </>
  );
}
