import "@google/model-viewer";

const HeroSection = () => {
  return (
    <section className="py-25 mt-30">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Text (4 columns) */}
        <div className="md:w-5/12 text-left">
          <h1 className="font-stevie-sans text-peru text-sm-h1 md:text-md-h1 lg:text-lg-h1">
            Mobin Donut, Pure Delight.
          </h1>
          <h2 className="font-beloved-script text-peru text-sm-h2 md:text-md-h2 lg:text-lg-h2">
            Bite by bite, Spreading Joy.
          </h2>
          <p className="my-5 max-w-2xl text-sm-p md:text-md-p lg:text-lg-p font-light text-black">
            We are passionate about crafting the finest donuts with fresh,
            sustainable ingredients.
          </p>
        </div>

        {/* Middle Space (2 columns) */}
        <div className="hidden md:block md:w-1/12"></div>

        {/* 3D Donut (6 columns) */}
        <div className="md:w-6/12 flex justify-center">
          <model-viewer
            src="/donut.glb"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            tone-mapping="neutral"
            poster="poster.webp"
            exposure="1"
            auto-rotate
            rotation-per-second="20deg"
            disable-zoom
            className="w-[450px] max-w-sm h-64 md:h-96 block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;