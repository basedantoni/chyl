import MusicCard from "@/components/music/MusicCard";

export default function Music() {
  return (
    <main className="flex flex-col items-center justify-stretch gap-12 px-5 pt-10 lg:px-40 xl:pt-16">
      <h1 className="font-moki uppercase xl:text-6xl">Releases</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
        <MusicCard src="test-music.png" title="Boom Boom" />
      </div>
    </main>
  );
}
