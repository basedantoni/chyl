"use client";

import "@/app/globals.css";
import { Visual } from "@/types";
import { useState } from "react";
import { useOverlay } from "@/context/LayloProvider";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import LayloOverlay from "@/components/LayloOverlay";

type Props = {
  videos: Array<Visual>;
};

export default function VideoBackground({ videos }: Props) {
  const defaultVideo = "/video/chyl-letters.mp4";
  const [videoUrl, setVideoUrl] = useState<string | null>(defaultVideo);
  const { toggleOverlay } = useOverlay();
  const matches = useMediaQuery("(min-width: 426px)");

  return (
    <>
      {matches && <LayloOverlay />}
      <div>
        <div className="fixed left-0 top-0 -z-10 h-screen w-screen object-cover object-bottom">
          {videoUrl && (
            <video
              autoPlay
              playsInline
              muted
              loop
              className="w-full h-full sm:object-cover"
              src={videoUrl}
            />
          )}
        </div>
        <div className="marquee enable-animation hover:pause">
          <ul className="marquee__content text-center font-bold text-8xl sm:text-7xl uppercase hover:cursor-pointer">
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[4].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/music"
            >
              Music
            </Link>
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[3].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/tour"
            >
              Tour
            </Link>
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[2].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/video"
            >
              Video
            </Link>
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[1].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              target='_blank'
              href="https://chylracing.com/"
            >
              Merch
            </Link>
            <button
              className="hover:text-orange-500 uppercase flex flex-col"
              onMouseEnter={() => setVideoUrl(videos[0].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              onClick={toggleOverlay}
            >
              <span className="text-5xl leading-[0.8]">Join</span>
              <span className="text-2xl leading-[0.8] tracking-tighter">the Team</span>
            </button>
          </ul>

          {/* MIRROR CONTENT */}
          <ul
            className="marquee__content text-center font-bold text-8xl sm:text-7xl uppercase hover:cursor-pointer"
            aria-hidden="true"
          >
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[4].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/music"
            >
              Music
            </Link>
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[3].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/tour"
            >
              Tour
            </Link>
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[2].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/video"
            >
              Video
            </Link>
            <Link
              className="hover:text-orange-500"
              onMouseEnter={() => setVideoUrl(videos[1].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              target='_blank'
              href="https://chylracing.com/"
            >
              Merch
            </Link>
            <button
              className="hover:text-orange-500 uppercase flex flex-col"
              onMouseEnter={() => setVideoUrl(videos[0].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              onClick={toggleOverlay}
            >
              <span className="text-5xl leading-[0.8]">Join</span>
              <span className="text-2xl leading-[0.8] tracking-tighter">the Team</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
