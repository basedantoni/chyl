export default function Tour() {
  return (
    <main className="flex flex-col items-center justify-stretch gap-20 px-5 pt-10 lg:px-40 xl:pt-16">
      <h1 className="uppercase xl:text-6xl">Upcoming Shows</h1>
      <div className="flex w-full flex-col items-stretch gap-16">
        <div className="flex items-start justify-between md:items-center">
          {/* Desktop */}
          <div className="hidden items-center gap-16 font-bold md:flex xl:text-3xl">
            <p>2024</p>
            <p>Feb 21</p>
            <p>Los Angeles, California</p>
          </div>
          {/* Mobile */}
          <div className="flex items-center gap-12 font-bold md:hidden">
            <p>2024</p>
            <p>Feb 21</p>
          </div>
          <div className="flex flex-col items-end font-bold xl:text-3xl">
            <p className="max-w-52 overflow-hidden text-ellipsis text-nowrap text-right md:hidden">
              Los Angeles, California
            </p>
            <button>Get Tickets</button>
          </div>
        </div>
      </div>
    </main>
  );
}
