import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/home/Hero";
import Card from "./Components/home/Card";
import Products from "./Components/product/ProductsCatalog";
import AboutUsSection from "./Components/common/AboutUsSection";
import Vision from "./Components/common/Vision";
import Banner from "./Components/common/Banner";
import SliderHero from "./Components/home/SliderHero";

export default function Home() {
  return (
    <>
      {/* <Hero/> */}
      <div className="">
        <SliderHero />
        <Card />
        <Products />
        <AboutUsSection />
        <Vision />
        <Banner />
      </div>
    </>
  );
}
