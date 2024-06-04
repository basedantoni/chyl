// components/Video.js
import { getPlaylistItems, getYoutubePlaylists } from "@/lib/api";
import styles from "./styles.module.css";
import { Item, PlaylistItemResponse, PlaylistResponse } from "@/types";
import dynamic from "next/dynamic";

const VideoList = dynamic(() => import("@/components/video/VideoList"), { ssr: false });

interface PlaylistSection {
  name: string;
  playlistItem: Item[];
}

async function fetchData(): Promise<PlaylistSection[]> {
  try {
    const playlists: PlaylistResponse = await getYoutubePlaylists();
    const sections: Array<PlaylistSection> = [];

    for (const playlist of playlists.items) {
      const playlistItems: PlaylistResponse = await getPlaylistItems(playlist.id);
      const validItems = playlistItems.items.filter(item => {
        const isAvailable = item.contentDetails && item.contentDetails.videoId;
        const isNotDeleted = item.snippet && !item.snippet.title.includes('Deleted video');
        const isNotPrivate = item.snippet && !item.snippet.title.includes('Private video');
        const isNotAgeRestricted = item.snippet.title !== "CHYL - Tokyo Affair (feat. Saitei)";

        return isAvailable && isNotDeleted && isNotPrivate && isNotAgeRestricted;
      });

      if (validItems.length > 0) {
        sections.push({
          name: playlist.snippet.title,
          playlistItem: validItems
        });
      }
    }
    return sections;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Video() {
  const playlistSections = await fetchData();

  return (
    <div className={styles.video}>
      <VideoList playlistSections={playlistSections} />
    </div>
  );
}