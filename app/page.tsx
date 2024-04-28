import VideoBackground from '@/components/VideoBackground';
import { Video } from '@/types';

export default function Home() {
  const videos: Array<Video> = [
    { title: "01", url: "/video/landing.mp4" },
    { title: "02", url: "/video/chyl-car.mp4" },
    { title: "03", url: "/video/chyl-pokemon.mp4" },
    { title: "01", url: "/video/landing.mp4" },
  ]
  return (
    <main>
      <h1 className="font-moki absolute top-20 w-full text-center text-7xl">
        CHYL
      </h1>
      <VideoBackground videos={videos} />
    </main>
  );
}
