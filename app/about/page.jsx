import React from 'react'
import PageNameBanner from '../Components/common/PageNameBanner'
import Banner from '../Components/common/Banner'
import AboutUsSection from '../Components/common/AboutUsSection';
import Vision from '../Components/common/Vision';
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