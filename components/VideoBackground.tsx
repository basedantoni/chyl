"use client"

import { Video } from '@/types';
import { useState } from "react"

type Props = {
  videos: Array<Video>;
};

export default function VideoBackground({ videos }: Props) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-screen w-screen object-cover object-bottom">
        {videoUrl && <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={videoUrl}
        />}
      </div>
      <div>
        <ul className='flex gap-3 text-center text-lg'>
          <li onMouseEnter={() => setVideoUrl(videos[0].url)} onMouseLeave={() => setVideoUrl(null)}>Music</li>
          <li onMouseEnter={() => setVideoUrl(videos[1].url)} onMouseLeave={() => setVideoUrl(null)}>Art</li>
          <li onMouseEnter={() => setVideoUrl(videos[2].url)} onMouseLeave={() => setVideoUrl(null)}>Video</li>
          <li onMouseEnter={() => setVideoUrl(videos[3].url)} onMouseLeave={() => setVideoUrl(null)}>Merch</li>
        </ul>
      </div>
    </>
  )
}