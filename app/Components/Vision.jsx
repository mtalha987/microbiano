import React from 'react'
import Image from 'next/image'
import Vector from '@/public/images/Vector1.svg'
import VisionImg from '@/public/images/vision.png'

const Vision = () => {
  return (
    <>
        <div className='  md:mt-[182px] md:ml-[90px] sm:ml-5 flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal'>
            <div className='lg:w-6/12 mx-4 md:mx-0'>
                <div className='mt-28'>
                <h2 className="text-[#5f1654] text-[42px] font-normal font-['Arial'] xs:text-center">Our Vision and Mission</h2>
                    <Image src={Vector} className='mg:ml-44' />
                </div>
                <div className='xs:mr-2'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <div className="w-[52px] h-[52px] bg-[#f5e9f0] rounded-[100px]" ></div>
                            <div className="text-[#1e1e1e] text-[28px] font-normal font-['Inter']">Vision</div>

                        </div>
                        <p className="w-[70%] xs:w-[85%] text-black text-base font-normal font-['Inter'] leading-normal ml-[70px] mt-5">Our vision to provide high quality cost effecve complete range of Microbiological Prepared Culture Media to UAE and GCC Market.</p>
                    </div>
                    <div className='mt-12'>
                        <div className='flex items-center gap-4'>
                            <div className="w-[52px] h-[52px] bg-[#f5e9f0] rounded-[100px]" ></div>
                            <div className="text-[#1e1e1e] text-[28px] font-normal font-['Inter']">Mission</div>

                        </div>
                        <p className="w-[70%] xs:w-[85%] text-black text-base font-normal font-['Inter'] leading-normal ml-[70px] mt-5">Our mission is to Manufacturer and supply high quality Readymade Culture Media and broth and supply across UAE and GCC countries.</p>
                    </div>

                </div>
            </div>
            <div className='lg:w-6/12 lg:relative '>
                <Image src={VisionImg} className='mt-12 lg:mt-0'/>
                <div className="w-[155px] h-[369px] bg-[#9e1f66] lg:absolute -z-10 top-[25%] right-24 hidden lg:block" />
            </div>
        </div>
    </>
  )
}

export default Vision