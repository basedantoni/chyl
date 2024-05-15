import VideoBackground from "@/components/VideoBackground";
import { Video } from "@/types";
import { getAllLandingVisuals } from "@/lib/api";

export const dynamic = "force-dynamic"

export default async function Home() {
  const contentVideos = await getAllLandingVisuals();

  contentVideos.sort((a, b) => b.title - a.title);

  return (
    <main className="relative h-screen w-screen overflow-hidden flex flex-col justify-end">
      {/* <h1 className="font-moki absolute top-20 w-full text-center text-7xl">
        CHYL
      </h1> */}
      <VideoBackground videos={contentVideos} />
    </main>
  );
}
