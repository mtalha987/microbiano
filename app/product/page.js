import React from 'react'
import Banner from '../Components/common/Banner'
import PageNameBanner from '../Components/common/PageNameBanner'
import ProductBanner from "@/public/images/productPageBanner.png"
import ProductComplete from '../Components/product/ProductComplete'

const page = () => {
  return (
    <>
      <PageNameBanner title='Product Page' image={ProductBanner}/>
      <ProductComplete/>
      <Banner/>
    </>
  )
}

export default page