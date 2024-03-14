import VideoTiles from "@/components/video/VideoTiles";
import { getAllVideos } from "@/lib/api";
import styles from "./styles.module.css";

async function getVideos() {
  const spaceId = "4nwbvve7a2v0";
  const environmentId = "master";
  const contentType = "video";

  const res = await fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=${contentType}&include=1`,
  );
  return res.json();
}

export default async function Video() {
  const allVideos = await getAllVideos();

  return (
    <div className={styles.video}>
      <VideoTiles videos={allVideos} />
    </div>
  );
}
