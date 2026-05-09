import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/10 -z-10" />
      <div className="absolute inset-0 bg-[url('@/assets/Banner.png')] bg-cover bg-center -z-20" />
      <div className="p-5 sm:p-8 lg:p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer w-full sm:w-auto">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer w-full sm:w-auto">
            View Destination
          </button>
        </div>
      </div>

      <div className="bg-white/30 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between gap-5 w-full items-center p-4 sm:p-5 lg:p-4">
        <div className="px-3 text-center sm:text-left">
          <h3 className="text-sm">Location</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

        <Separator
          variant="tertiary"
          orientation="vertical"
          className="hidden lg:flex h-10"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime/3 Days</p>
        </div>

        <Separator
          variant="tertiary"
          orientation="vertical"
          className="hidden lg:flex h-10"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-sm">Budget</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

        <Separator
          variant="tertiary"
          orientation="vertical"
          className="hidden lg:flex h-10"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-sm">People</h3>
          <p className="text-xs">5-10</p>
        </div>

        <div className="bg-cyan-500 py-2 px-4 cursor-pointer w-full sm:w-auto text-center">
          <h3>Search</h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
