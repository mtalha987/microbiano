import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Products from "./Components/ProductsCatalog";
import AboutUsSection from "./Components/AboutUsSection";
import Vision from "./Components/Vision";
import Banner from "./Components/Banner";
import SliderHero from "./Components/SliderHero";

export default function Home() {
  return (
    <>
    {/* <Hero/> */}
    <SliderHero/>
    <Card/>
    <Products/>
    <AboutUsSection/>
    <Vision/>
    <Banner/>
    </>
  );
}
