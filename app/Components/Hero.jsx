import React from 'react'
import Image from 'next/image'
import Heroimg from '../Images/hero.svg'
import Vector1 from '../Images/Vector1.svg'

const Hero = () => {
  return (
    <>
        <div className='flex flex-wrap lg:flex-nowrap  xl:ml-[90px] lg:ml-[40px] sm:ml-5'>
            <div className=' lg:mt-24 mt-8'>
                <h1 className='xl:w-[59%] lg:w-[70%] sm:w-[89%] text-[#5f1654] sm:text-5xl xs:text-4xl font-normal p-2.5'>Advanced Microbiological Media Solutions by Safecare Industries in Abu Dhabi</h1>
                <div className='ml-80 '>
                    <Image
                    src={Vector1}
                    />
                </div>
                <p className="mt-4 text-black text-base font-normal  leading-normal lg:w-[51%] w-[95%] pl-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                <div className='mt-11 pl-2.5 pb-36'>
                    <button className='w-[134px] h-12 bg-[#5f1654] text-white text-base font-normal'>Enquire now</button>
                    <button className='w-[134px] h-12 border border-[#5f1654] text-[#5f1654] text-base font-semibold ml-3'>Learn more</button>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Image
                src={Heroimg}
                className="relative right-0 bottom-0 top-0 w-[100%] h-full"
                
                width={717}
                height={623}
                />
            </div>
        </div>
    </>
  )
}

export default Hero