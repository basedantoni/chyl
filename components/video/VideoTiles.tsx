"use client";

import VideoItems from "@/components/video/VideoItems";
import { ExternalLink } from "lucide-react";
import { Video } from "@/types";
import { Canvas } from "@react-three/fiber";

import { useVideoContext } from "@/context/VideoProvider";
import { useEffect } from "react";

export default function VideoTiles({ videos }: { videos: Array<Video> }) {
  const { handleSetVideos, currentVideo } = useVideoContext();

  useEffect(() => {
    handleSetVideos(videos);
  }, [videos, handleSetVideos]);

  const calcHeight = "calc(100vh - 128px)";

  if (!videos) {
    return "Loading...";
  }

  if (!videos.length) {
    return "Loading...";
  }

  return (
    <div
      className="relative w-screen overflow-hidden box-border"
      style={{ height: calcHeight }}
    >
      {currentVideo && currentVideo.url !== null && (
        <div className="z-50 px-4 flex justify-center items-center gap-1 absolute bottom-0 mx-auto w-screen text-center">
          <a
            href={
              currentVideo.url ?? "https://www.youtube.com/watch?v=SqK_tpg6-jk"
            }
            className="cursor-pointer hover:underline"
          >
            {currentVideo.title}
            <span>
              <ExternalLink className="h-4 hover:underline cursor-pointer inline" />
            </span>
          </a>
        </div>
      )}
      <Canvas className="absolute w-screen">
        <ambientLight intensity={3} />
        <VideoItems />
      </Canvas>
    </div>
  );
}
