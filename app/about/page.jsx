import React from 'react'
import PageNameBanner from '../Components/PageNameBanner'
import Banner from '../Components/Banner'
import AboutUsSection from '../Components/AboutUsSection'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import Vision from '../Components/Vision';
import ProductPageBanner from "@/public/images/productPageBanner.png"


const page = () => {
  return (
    <>
        <PageNameBanner title="About Us" image={ProductPageBanner}/>
        <AboutUsSection/>
        <Vision/>
        <Banner/>
    </>
  )
}

export default page