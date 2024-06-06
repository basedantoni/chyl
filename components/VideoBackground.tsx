"use client";

import "@/app/globals.css";
import { Visual } from "@/types";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const textContainers = document.querySelectorAll(".word");

    const defaultScale = 1;
    const maxScale = 2;
    const neighborScale = 1.5;

    textContainers.forEach((container) => {
      const spans = container.querySelectorAll("span");

      container.addEventListener("mousemove", (e) => {
        const target = e.target as HTMLElement;
        const index = Array.from(spans).indexOf(target);

        spans.forEach((span, i) => {
          let scale = defaultScale;

          if (i === index) {
            scale = maxScale;
          } else if (i === index - 1 || i === index + 1) {
            scale = neighborScale;
          }

          span.style.transform = `scaleY(${scale})`;
        });
      });

      container.addEventListener("mouseleave", () => {
        spans.forEach((span) => {
          console.log(span)
          span.style.transform = `scaleY(${defaultScale})`;
        });
      });
    });
  }, []);

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
          <ul className="marquee__content text-center font-bold text-4xl sm:text-8xl uppercase hover:cursor-pointer">
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[4].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/music"
            >
              <span>M</span>
              <span>u</span>
              <span>s</span>
              <span>i</span>
              <span>c</span>
            </Link>
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[3].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/tour"
            >
              <span>T</span>
              <span>o</span>
              <span>u</span>
              <span>r</span>
            </Link>
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[2].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/video"
            >
              <span>V</span>
              <span>i</span>
              <span>d</span>
              <span>e</span>
              <span>o</span>
            </Link>
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[1].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              target='_blank'
              href="https://chylracing.com/"
            >
              <span>M</span>
              <span>e</span>
              <span>r</span>
              <span>c</span>
              <span>h</span>
            </Link>
            <button
              className="hover:text-orange-500 uppercase flex flex-col"
              onMouseEnter={() => setVideoUrl(videos[0].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              onClick={toggleOverlay}
            >
              <span className="text-2xl sm:text-6xl leading-[0.8] sm:leading-[0.8]">Join</span>
              <span className="text-xs sm:text-3xl leading-[0.8] sm:leading-[0.8] tracking-tighter">the Team</span>
            </button>
          </ul>

          {/* MIRROR CONTENT */}
          <ul
            className="marquee__content text-center font-bold text-4xl sm:text-8xl uppercase hover:cursor-pointer"
            aria-hidden="true"
          >
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[4].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/music"
            >
              <span>M</span>
              <span>u</span>
              <span>s</span>
              <span>i</span>
              <span>c</span>
            </Link>
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[3].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/tour"
            >
              <span>T</span>
              <span>o</span>
              <span>u</span>
              <span>r</span>
            </Link>
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[2].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              href="/video"
            >
              <span>V</span>
              <span>i</span>
              <span>d</span>
              <span>e</span>
              <span>o</span>
            </Link>
            <Link
              className="hover:text-orange-500 word"
              onMouseEnter={() => setVideoUrl(videos[1].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              target='_blank'
              href="https://chylracing.com/"
            >
              <span>M</span>
              <span>e</span>
              <span>r</span>
              <span>c</span>
              <span>h</span>
            </Link>
            <button
              className="hover:text-orange-500 uppercase flex flex-col"
              onMouseEnter={() => setVideoUrl(videos[0].videoAsset.url)}
              onMouseLeave={() => setVideoUrl(defaultVideo)}
              onClick={toggleOverlay}
            >
              <span className="text-2xl sm:text-6xl leading-[0.8] sm:leading-[0.8]">Join</span>
              <span className="text-xs sm:text-3xl leading-[0.8] sm:leading-[0.8] tracking-tighter">the Team</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
