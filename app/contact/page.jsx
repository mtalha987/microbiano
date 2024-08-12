import React from 'react'
import Hero from '../Components/contact/Hero'
import ContactInformation from '../Components/contact/ContactInformation'
import PageNameBanner from '../Components/PageNameBanner'
import ProductPageBanner from "@/public/images/productPageBanner.png"
import TouchWithUS from '../Components/contact/TouchwithUS'

const page = () => {
  return (
    <>
      <PageNameBanner title="Contact Us" image={ProductPageBanner}/>
      <TouchWithUS/>
      <ContactInformation/>
    </>
  )
}

export default page