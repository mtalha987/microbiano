import React from 'react'
import Hero from '../Components/contact/Hero'
import ContactInformation from '../Components/contact/ContactInformation'
import PageNameBanner from '../Components/common/PageNameBanner'
import ProductPageBanner from "@/public/images/productPageBanner.png"
import TouchUs from '../Components/contact/TouchUs'

const page = () => {
  return (
    <>
      <PageNameBanner title="Contact Us" image={ProductPageBanner}/>
      <TouchUs/>
      <ContactInformation/>
    </>
  )
}

export default page