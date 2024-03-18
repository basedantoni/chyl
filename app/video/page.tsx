import VideoTiles from "@/components/video/VideoTiles";
import { Video as VideoType } from "@/types";
import { getAllVideos } from "@/lib/api";
import styles from "./styles.module.css";

export default async function Video() {
  const allVideos: Array<VideoType> = await getAllVideos();

  return (
    <div className={styles.video}>
      <VideoTiles videos={allVideos as any} />
    </div>
  );
}
