"use client";

import "@/app/globals.css";
import { Video } from "@/types";
import { useState } from "react";
import { useOverlay } from "@/context/LayloProvider";
import Link from "next/link";
import LayloOverlay from "@/components/LayloOverlay";

type Props = {
  videos: Array<Video>;
};

export default function VideoBackground({ videos }: Props) {
  const defaultVideo = "/video/chyl-letters.mp4";
  const [videoUrl, setVideoUrl] = useState<string | null>(defaultVideo);
  const { toggleOverlay, isOverlayVisible } = useOverlay();
  const [showNav, setShowNav] = useState(false);

  const handleLayloMobile = () => {
    setShowNav((previous) => !previous);
    toggleOverlay();
  };

  return (
    <>
      <LayloOverlay />

      <div className="fixed left-0 top-0 -z-10 h-screen w-screen object-cover object-bottom">
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            src={videoUrl}
          />
        )}
      </div>
      <div className="marquee enable-animation hover:pause">
        <ul className="marquee__content text-center font-bold text-[10rem] leading-[8rem] uppercase hover:cursor-pointer">
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[0].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/music"
          >
            Music
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[1].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/tour"
          >
            Tour
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[2].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/video"
          >
            Video
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[3].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/music"
          >
            Merch
          </Link>
          <button
            className="hover:text-orange-500 uppercase"
            onClick={toggleOverlay}
          >
            Join the Team
          </button>
        </ul>

        {/* MIRROR CONTENT */}
        <ul
          className="marquee__content text-center font-bold text-[10rem] leading-[8rem] uppercase hover:cursor-pointer"
          aria-hidden="true"
        >
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[0].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/music"
          >
            Music
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[1].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/tour"
          >
            Tour
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[2].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/video"
          >
            Video
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[3].url)}
            onMouseLeave={() => setVideoUrl(defaultVideo)}
            href="/music"
          >
            Merch
          </Link>
          <button
            className="hover:text-orange-500 uppercase"
            onClick={toggleOverlay}
          >
            Join the Team
          </button>
        </ul>
      </div>
    </>
  );
}
