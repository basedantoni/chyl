export default function Home() {
  return (
    <main>
      <h1 className="font-moki absolute top-20 w-full text-center text-7xl">
        CHYL
      </h1>
      <video
        playsInline
        autoPlay
        muted
        loop
        className="hidden sm:block fixed left-0 top-0 -z-10 h-screen w-screen object-cover object-bottom"
      >
        <source src="/video/landing.mp4" type="video/mp4" />
      </video>

      <video
        playsInline
        autoPlay
        muted
        loop
        className="sm:hidden fixed left-0 top-0 -z-10 h-screen w-screen object-cover object-bottom"
      >
        <source src="/video/landing-mobile.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
