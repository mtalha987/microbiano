import React from 'react'
import PageNameBanner from '../Components/PageNameBanner'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import TouchWithUs from '../Components/contact/TouchWithUs';
import LocationMap from '../Components/contact/LocationMap';
import ProductPageBanner from "@/public/images/productPageBanner.png"


const page = () => {
  return (
    <>
    <PageNameBanner title="Contact Us" image={ProductPageBanner}/>
    <TouchWithUs/>
    <LocationMap/>
    </>
  )
}

export default page