"use client";

import "@/app/globals.css";
import { Visual } from "@/types";
import { useState } from "react";
import { useOverlay } from "@/context/LayloProvider";
import Link from "next/link";
import LayloOverlay from "@/components/LayloOverlay";

type Props = {
  videos: Array<Visual>;
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
      {/* MOBILE
      <div className='sm:hidden'>
        <video
          className="fixed top-0 left-0 w-full h-full object-contain blur-bg -z-20"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={defaultVideo} type="video/mp4" />
        </video>
      </div> */}

      {/* DESKTOP */}
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
          <ul className="marquee__content text-center font-bold text-[10rem] leading-[8rem] uppercase hover:cursor-pointer">
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
              className="hover:text-orange-500 uppercase"
              onMouseEnter={() => setVideoUrl(videos[0].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
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
              className="hover:text-orange-500 uppercase"
              onMouseEnter={() => setVideoUrl(videos[0].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              onClick={toggleOverlay}
            >
              Join the Team
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
