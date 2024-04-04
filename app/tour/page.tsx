import Image from "next/image";

export default function Tour() {
  return (
    <main className="flex flex-col items-center justify-stretch gap-20 px-5 pt-24 lg:px-40 lg:pt-10 xl:pt-16">
      <div className="flex gap-2.5">
        <h1 className="hidden sm:block font-moki self-end uppercase text-xl xl:text-6xl">
          Upcoming Shows
        </h1>
        <h1 className="sm:hidden font-moki self-end uppercase ml-5 text-4xl xl:text-6xl">
          Shows
        </h1>
        <Image
          className="w-16 xl:w-24"
          src="/svg/circuit.svg"
          width={96}
          height={96}
          alt="cover"
        />
      </div>
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
