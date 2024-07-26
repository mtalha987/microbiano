import Image from "next/image";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Products from "./Components/ProductsCatalog";
import AboutUsSection from "./Components/AboutUsSection";
import Vision from "./Components/Vision";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
    <div className="bg-[#f5e9f0] m-0 p-0">
    <Header/>
    <Hero/>
    </div>
    <Card/>
    <Products/>
    <AboutUsSection/>
    <Vision/>
    <Banner/>
    </>
  );
}
