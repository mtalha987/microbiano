import React from 'react'
import Image from 'next/image'
import Vector from '@/public/images/Vector1.svg'
import VisionImg from '@/public/images/vision.png'
import VisionIcon from '@/public/images/visionIcon.svg'
import MissionIcon from '@/public/images/missionIcon.svg'

const Vision = () => {
  return (
    <>
          <div className=' 2xl:max-w-[1440px] 2xl:mx-auto 2xl:p-0 xl:px-[90px] lg:px-10 px-5 lg:mt-16 sm:mt-6  flex flex-wrap xl:flex-nowrap   lg:justify-between justify-center'>
         
            {/* Section 2 */}
            <div className='lg:w-6/12 2xl:w-[auto]  '>
                <div className='lg:mt-28 sm:mt-8 xs:mt-14'>
                <h2 className="text-secondary text-[42px] font-normal font-arial text-center lg:text-left">Our Vision and Mission</h2>
                    <Image src={Vector} className='sm:ml-48 xs:ml-9 xs:mt-3 mb-9 lg:mb-0' />
                </div>
                <div className='xs:mt-2'>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-2'>
                        <div className='flex items-center   gap-4'>
                            <div className="w-[52px] h-[52px]  rounded-[100px]" ><Image src={VisionIcon} alt='Vision' /></div>
                            <div className="text-light-black text-[28px] font-normal font-secondary">Vision</div>

                        </div>
                        <p className="w-[70%] xs:w-[100%] text-black text-base font-normal font-secondary leading-normal sm:ml-[70px] mt-5">Our vision to provide high quality cost effecve complete range of Microbiological Prepared Culture Media to UAE and GCC Market.</p>
                    </div>
                    <div className='mt-12 flex flex-col justify-center items-center lg:items-start gap-2'>
                        <div className='flex items-center gap-4'>
                            <div className="w-[52px] h-[52px]  rounded-[100px]" ><Image src={MissionIcon} alt='Mission' /></div>
                            <div className="text-light-black text-[28px] font-normal font-secondary">Mission</div>

                        </div>
                        <p className="w-[70%] xs:w-[100%] text-black text-base font-normal font-secondary leading-normal sm:ml-[70px] mt-5">Our mission is to Manufacturer and supply high quality Readymade Culture Media and broth and supply across UAE and GCC countries.</p>
                    </div>

                </div>
            </div>
            <div className='lg:w-6/12 2xl:w-auto lg:relative flex justify-end '>
                <Image src={VisionImg} className='mt-12 xl:ml-12 lg:mt-0'/>
                <div className="w-[155px] h-[397px] bg-secondary lg:absolute -z-10  hidden xl:block top-20 left-16 2xl:left-0" />
            </div>
        </div>
    </>
  )
}

export default Vision