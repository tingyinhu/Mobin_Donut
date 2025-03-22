import React from "react";
import DonutImage from "../../../Assets/AboutUsDonut.webp"; 

const AboutUs = () => {
  return (
    <section id="About Us" className="scroll-mt-20 py-25 flex flex-col items-center text-center">
      {/* Title  */}
      <div className="my-5">
        <h2 className="font-stevie-sans text-sm-h2 md:text-md-h2 lg:text-lg-h2 text-peru">
          About Us
        </h2>
      </div>

      {/* Subtitle */}
      <p className="font-beloved-script text-sm-h1 md:text-md-h1 lg:text-lg-h1 text-peru flex items-center gap-2 my-5">
        Happiness 
        <img src={DonutImage} alt="Donut" className="w-20 h-20 inline-block" /> 
        in Every Bite!
      </p>

      {/* Description */}
      <p className="my-5 max-w-2xl text-sm-p md:text-md-p lg:text-lg-p font-light text-black">
        Founded by a group of donut enthusiasts, Mobin Donut started as a small bakery
        and quickly became a beloved local spot. Our dedication to quality and innovation 
        has set us apart in the Vancouver donut scene.
      </p>
    </section>
  );
};

export default AboutUs;