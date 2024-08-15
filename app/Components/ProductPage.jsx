import React from 'react'
import Image from 'next/image'
import ProductBanner from "@/public/images/productPageBanner.png"

const ProductPage = () => {
  return (
    <>
        <div className="2xl:max-w-[1440px] 2xl:mx-auto xl:mx-[90px] lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5" >
            <Image src={ProductBanner} className='absolute -z-10 w-full h-full ' />
            <h2 className="text-white text-5xl font-normal font-['Arial'] absolute bottom-9 left-9 xs:top-[50%] xs:left-[50%] xs:w-full xs:text-center xs:translate-x-[-50%] xs:translate-y-[-50%] ">Product Page</h2>
        </div>
    </>
  )
}

export default ProductPage