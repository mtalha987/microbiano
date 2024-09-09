import React from 'react'
import Banner from '../Components/common/Banner'
import ProductSection from '../Components/product/ProductSection'
import PageNameBanner from '../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"

const page = () => {
  return (
    <>
      <PageNameBanner title='Product Page' image={ProductBanner}/>
      <ProductSection/>
      <Banner/>
    </>
  )
}

export default page