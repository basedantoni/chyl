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
        <div className="absolute right-4 top-4 md:hidden z-10">
          <Bars3Icon
            className="w-8"
            onClick={() => setShowNav((previous) => !previous)}
          />
        </div>
      )}

      {showNav && (
        <nav className="animate-slideInDown absolute left-0 top-0 flex h-screen w-screen gap-24 flex-col items-center justify-center bg-black z-20">
          <Link
            className="font-moki absolute top-16 w-full text-center text-5xl"
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
          <ul className="flex flex-col items-center gap-6">
            <Link
              className="text-2xl font-semibold uppercase"
              href="/music"
              onClick={() => setShowNav((previous) => !previous)}
            >
              Music
            </Link>
            <Link
              className="text-2xl font-semibold uppercase"
              href="/tour"
              onClick={() => setShowNav((previous) => !previous)}
            >
              Tour
            </Link>
            <Link
              className="text-2xl font-semibold uppercase"
              href="/video"
              onClick={() => setShowNav((previous) => !previous)}
            >
              Video
            </Link>
            <Link
              className="text-2xl font-semibold uppercase"
              href="https://chylracing.com/"
              target='_blank'
              onClick={() => setShowNav((previous) => !previous)}
            >
              Merch
            </Link>
            <button
              className="text-2xl font-semibold uppercase"
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
        <Link className="font-semibold uppercase xl:text-2xl" href="/">
          Home
        </Link>
        <Link className="font-semibold uppercase xl:text-2xl" href="/music">
          Music
        </Link>
        <Link className="font-semibold uppercase xl:text-2xl" href="/tour">
          Tour
        </Link>
        <Link className="font-semibold uppercase xl:text-2xl" href="/video">
          Video
        </Link>
        <Link className="font-semibold uppercase xl:text-2xl" href="https://chylracing.com/" target='_blank'>
          Merch
        </Link>
        <button
          className="font-semibold uppercase xl:text-2xl"
          onClick={toggleOverlay}
        >
          Join the Team
        </button>
      </nav>
    </>
  );
}
