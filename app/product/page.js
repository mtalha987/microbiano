import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import ProductPage from '../Components/ProductPage'
import ProductSection from '../Components/ProductSection'

const page = () => {
  return (
    <>
      <Header/>
      <ProductPage/>
      <ProductSection/>
      {/* <Banner/> */}
    </>
  )
}

export default page