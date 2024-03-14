export default function Home() {
  return (
    <main>
      <video
        playsInline
        autoPlay
        muted
        loop
        // poster="/img/test-music.png"
        className="fixed left-0 top-0 h-screen w-screen object-cover object-bottom"
      >
        <source src="/video/landing.webm" type="video/webm" />
        <source src="/video/landing.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
