"use client";

import { Video } from "@/types";
import { useState } from "react";
import "@/app/globals.css";
import Link from "next/link";

type Props = {
  videos: Array<Video>;
};

export default function VideoBackground({ videos }: Props) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  return (
    <>
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
      <div className="absolute bottom-0 marquee enable-animation hover:pause">
        <ul className="marquee__content text-center font-bold text-9xl uppercase hover:cursor-pointer">
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[0].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/music"
          >
            Music
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[1].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/tour"
          >
            Tour
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[2].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/video"
          >
            Video
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[3].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/music"
          >
            Merch
          </Link>
        </ul>

        {/* MIRROR CONTENT */}
        <ul
          className="marquee__content text-center font-bold text-9xl uppercase hover:cursor-pointer"
          aria-hidden="true"
        >
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[0].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/music"
          >
            Music
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[1].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/tour"
          >
            Tour
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[2].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/video"
          >
            Video
          </Link>
          <Link
            className="hover:text-orange-500"
            onMouseEnter={() => setVideoUrl(videos[3].url)}
            onMouseLeave={() => setVideoUrl(null)}
            href="/music"
          >
            Merch
          </Link>
        </ul>
      </div>
    </>
  );
}
