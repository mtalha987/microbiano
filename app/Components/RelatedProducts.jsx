import React from 'react'
import ProductData from './ProductData'

const RelatedProducts = () => {
  return (
    <>
        <div className='xl:px-[90px] lg:px-[40px] px-5 mt-16'>
            <h2 className='text-[#271F19] text-2xl font-normal font-primary leading-[28.88px]'>Related products</h2>
            <ProductData limit={4}/>
        </div>
    </>
  )
}

export default RelatedProducts