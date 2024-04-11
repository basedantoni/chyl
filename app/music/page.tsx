import MusicCard from "@/components/music/MusicCard";

import { fetchSpotifyToken, fetchArtistAlbums } from "@/lib/api";
import { AlbumItem } from "@/types";

export default async function Music() {
  const token: any = await fetchSpotifyToken();
  const albums: any = await fetchArtistAlbums(token.access_token);

  const relevant_music = albums.items.filter((album: AlbumItem) => {
    return album.release_date > "2022-12-12";
  });

  return (
    <main className="flex flex-col items-center justify-stretch gap-12 px-5 pt-24 lg:px-40 lg:pt-10 xl:pt-16">
      <h1 className="font-moki uppercase text-4xl xl:text-6xl">Releases</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {relevant_music.map((album: AlbumItem) => (
          <MusicCard
            key={album.id}
            src={album.images[0].url}
            title={album.name}
            href={album.external_urls.spotify}
          />
        ))}
      </div>
    </main>
  );
}
