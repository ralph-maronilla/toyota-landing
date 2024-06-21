import React from "react";
import Hero from "../components/home/Hero";
import Desc from "../components/home/Desc";
import Specs from "../components/home/Specs";
import CarouselSection from "../components/home/CarouselSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Desc />
      <Specs />
      <CarouselSection />
    </>
  );
};

export default Home;
