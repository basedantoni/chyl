"use client";

import VideoItems from "@/components/video/VideoItems";
import { Video } from "@/types";
import { Canvas } from "@react-three/fiber";

import { useVideoContext } from "@/context/VideoProvider";
import { useEffect } from "react";

export default function VideoTiles({ videos }: { videos: Array<Video> }) {
  const { handleSetVideos } = useVideoContext();

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
    <div className="w-screen overflow-hidden" style={{ height: calcHeight }}>
      <Canvas className="absolute w-screen">
        <ambientLight intensity={3} />
        <VideoItems />
      </Canvas>
    </div>
  );
}
