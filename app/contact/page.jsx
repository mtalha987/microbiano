import React from 'react'
import Hero from '../Components/contact/Hero'
import TouchWithUs from '../Components/contact/TouchwithUs.jsx'
import ContactInformation from '../Components/contact/ContactInformation'
import PageNameBanner from '../Components/PageNameBanner'
import ProductPageBanner from "@/public/images/productPageBanner.png"

const page = () => {
  return (
    <>
      <PageNameBanner title="Contact Us" image={ProductPageBanner}/>
      <TouchWithUs/>
      <ContactInformation/>
    </>
  )
}

export default page