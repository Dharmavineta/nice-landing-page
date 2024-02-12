import Footer from "@/components/global/Footer";
import Hero from "@/components/global/Hero";
import Section2 from "@/components/global/Section2";
import Section3 from "@/components/global/Section3";
import Section4 from "@/components/global/Section4";
import Section5 from "@/components/global/Section5";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default Home;
