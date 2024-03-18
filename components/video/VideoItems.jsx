import Minimap from "@/components/video/Minimap";
import VideoItem from "@/components/video/VideoItem";
import { ScrollControls, Scroll } from "@react-three/drei";

import { useVideoContext } from "@/context/VideoProvider";
import { useThree } from "@react-three/fiber";

export default function VideoItems({ w = 0.7, gap = 0.15 }) {
  const { videos } = useVideoContext();
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + videos.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {videos.map((video, i) => (
          <VideoItem
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            url={video.thumbnail.url}
            assets={video.assetCollection.items}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}
