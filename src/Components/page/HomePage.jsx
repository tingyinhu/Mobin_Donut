// HomePage.jsx
import React from "react";
import HeroSection from "../section/HomePage/HeroSection";
import AboutUs from "../section/HomePage/AboutUs";
import Donuts from "../section/HomePage/Donuts";
import TastingParty from "../section/HomePage/TastingParty";

const HomePage = ({ cart, addToCart }) => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Donuts addToCart={addToCart} />
      <TastingParty />
    </div>
  );
};

export default HomePage;