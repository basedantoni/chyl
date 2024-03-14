import VideoTiles from "@/components/video/VideoTiles";
import { getAllVideos } from "@/lib/api";
import styles from "./styles.module.css";

export default async function Video() {
  const allVideos = await getAllVideos();

  return (
    <div className={styles.video}>
      <VideoTiles videos={allVideos} />
    </div>
  );
}
