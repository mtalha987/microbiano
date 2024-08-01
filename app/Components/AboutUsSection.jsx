import React from 'react'
import Image from 'next/image'
import Doctor from '@/public/images/doctor.png'
import Vector from '@/public/images/Vector1.svg'

const AboutUsSection = () => {
  return (
    <>
    <div className='bg-[#f5e9f0]/80  lg:h-[568px] xl:mt-[182px] sm:mt-[50px] flex sm:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-normal gap-[93px]'>
        <div className='lg:ml-[90px] mx-5 lg:relative lg:-top-9 sm:mt-5 lg:mt-0  xs:hidden '>
            <Image src={Doctor}/>

        </div>
        <div className='xs:mx-5 xs:mt-5'>
            <h2 className="text-[#5f1654] text-[42px] font-normal font-['Arial'] lg:mt-[102px] ">About Us</h2>
            <div>
                <Image src={Vector}/>
            </div>
            <div>
                <p className="w-[489px] xs:w-full  text-[#151515] text-base font-normal font-['Inter'] leading-normal mt-5">Safecare Industries located in KEZAD- Abu Dhabi with fully automated manufacturing facilities specialized in manufacturing and supplying an extensive range of Microbiological Pre-poured Culture Media (PPM), Pre-poured Tubed Media and Bottle Media. All operational functions adhere to the required industry compliance criteria </p>
            </div>
            <div className='mt-[42px] mb-10 lg:mb-0 '>
                <button className="text-white text-base font-normal font-['Arial'] w-[134px] h-12 bg-[#5f1654]">Enquire now</button>
            </div>

        </div>
    </div>
    
    </>
  )
}

export default AboutUsSection