"use client";

import React, { createContext, useContext, useState } from "react";
import { Video } from "@/types";

const VideoContext = createContext<{
  videos: Array<Video>;
  handleSetVideos: Function;
  handleSetCurrentVideo: Function;
  clickedVideoIdx: number;
  handleVideoClicked: Function;
  currentVideo: Video;
}>({
  videos: [],
  handleSetVideos: () => {},
  handleSetCurrentVideo: () => {},
  clickedVideoIdx: 0,
  handleVideoClicked: () => {},
  currentVideo: {
    title: undefined,
    url: "https://www.youtube.com/watch?v=SqK_tpg6-jk&t=108s",
  },
});

export default function VideoProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [clickedVideoIdx, setIsClickedVideo] = useState(0);
  const [videos, setVideos] = useState<Array<Video>>([]);
  const [currentVideo, setCurrentVideo] = useState<Video>({});

  const handleVideoClicked = (videoIdx: number) => {
    setIsClickedVideo(videoIdx);
  };

  const handleSetVideos = (videos: Array<Video>) => {
    setVideos(videos);
  };

  const handleSetCurrentVideo = (video: Video) => {
    setCurrentVideo(video);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        handleSetVideos,
        handleVideoClicked,
        handleSetCurrentVideo,
        clickedVideoIdx,
        currentVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export const useVideoContext = () => useContext(VideoContext);
