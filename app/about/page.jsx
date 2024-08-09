import React from 'react'
import PageNameBanner from '../Components/PageNameBanner'
import Banner from '../Components/Banner'
import AboutUsSection from '../Components/AboutUsSection'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import Vision from '../Components/Vision';


const page = () => {
  return (
    <>
        <PageNameBanner title="About Us" image={AboutHeroImg}/>
        <AboutUsSection/>
        <Vision/>
        <Banner/>
    </>
  )
}

export default page