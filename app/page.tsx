import VideoBackground from "@/components/VideoBackground";
import { getAllLandingVisuals } from "@/lib/api";

export const dynamic = "force-dynamic"

export default async function Home() {
  const contentVideos = await getAllLandingVisuals();

  contentVideos.sort((a, b) => b.title - a.title);

  return (
    <main className="relative h-[95vh] sm:h-screen w-screen overflow-hidden flex flex-col justify-end">
      <VideoBackground videos={contentVideos} />
    </main>
  );
}
