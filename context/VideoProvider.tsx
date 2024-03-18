"use client";

import React, { createContext, useContext, useState } from "react";
import { Video } from "@/types";

const VideoContext = createContext<{
  videos: Array<Video>;
  handleSetVideos: Function;
  clickedVideoIdx: number;
  handleVideoClicked: Function;
}>({
  videos: [],
  handleSetVideos: () => {},
  clickedVideoIdx: 0,
  handleVideoClicked: () => {},
});

export default function VideoProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [clickedVideoIdx, setIsClickedVideo] = useState(0);

  const [videos, setVideos] = useState<Array<Video>>([]);

  const handleVideoClicked = (videoIdx: number) => {
    setIsClickedVideo(videoIdx);
  };

  const handleSetVideos = (videos: Array<Video>) => {
    setVideos(videos);
  };

  return (
    <VideoContext.Provider
      value={{ videos, handleSetVideos, handleVideoClicked, clickedVideoIdx }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export const useVideoContext = () => useContext(VideoContext);
