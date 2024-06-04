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

export default async function Video() {
  const playlists: PlaylistResponse = await getYoutubePlaylists();
  const playlistSections: Array<PlaylistSection> = [];
  
  for (const playlist of playlists.items) {
    const playlistItems: PlaylistItemResponse = await getPlaylistItems(playlist.id);
    const validItems = playlistItems.items.filter(item => {
      const isAvailable = item.contentDetails && item.contentDetails.videoId;
      const isNotDeleted = item.snippet && !item.snippet.title.includes('Deleted video');
      const isNotPrivate = item.snippet && !item.snippet.title.includes('Private video');
      const isNotAgeRestricted = item.snippet.title !== "CHYL - Tokyo Affair (feat. Saitei)";

      return isAvailable && isNotDeleted && isNotPrivate && isNotAgeRestricted;
    });

    if (validItems.length > 0) {
      playlistSections.push({
        name: playlist.snippet.title,
        playlistItem: validItems
      });
    }
  }

  return (
    <div className="pb-32">
      <VideoList playlistSections={playlistSections} />
    </div>
  );
}
