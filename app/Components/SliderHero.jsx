"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "@/public/images/leftSliderArrow.svg";
import RightArrow from "@/public/images/rightSliderArrow.svg";
import Heroimg from '@/public/images/hero.svg'
import Vector1 from '@/public/images/Vector1.svg'

const SliderHero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
    <div className="">
      <div className="max-w-full relative">
        <div className="z-10 ">
          <Swiper
            ref={swiperRef}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            autoplay // Change delay to 1000 milliseconds (1 second)
          >
            <SwiperSlide>
            <div className='flex flex-wrap md:flex-nowrap  xl:pl-[90px] lg:pl-[40px] sm:pl-5 bg-[#f5e9f0]'>
            <div className='2xl:w-[60%] md:w-[70%] lg:w-[85%] lg:mt-24 mt-8'>
                <h1 className='xl:w-[72%] lg:w-[75%] sm:w-[89%] md:w-[95%] text-secondary sm:text-5xl xs:text-4xl font-normal font-arial p-2.5'>Advanced Microbiological Media Solutions by Safecare Industries in Abu Dhabi</h1>
                <div className='ml-80 '>
                    <Image
                    src={Vector1}
                    />
                </div>
                <p className="mt-4 text-black text-base font-normal font-secondary  leading-normal lg:w-[51%] w-[95%] pl-2.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                <div className='mt-11 pl-2.5 pb-36'>
                    <button className='w-[134px] h-12 bg-secondary text-white text-base font-normal font-arial'>Enquire now</button>
                    <button className='w-[134px] h-12 border border-secondary text-secondary text-base font-semibold ml-3 font-arial'>Learn more</button>
                </div>
            </div>
            <div className=''>
                <Image
                src={Heroimg}
                className="relative right-0 bottom-0 top-0 w-[100%] h-full"
                
                width={717}
                height={623}
                />
            </div>
        </div>
            </SwiperSlide>
           
          </Swiper>
        </div>

        <div
          className="w-[63px] h-[63px] absolute top-[40%] xs:top-[43%] xl:ml-4 left-0 z-20 max-sm:hidden"
          onClick={handlePrevSlide}
        >
          <Image
            src={LeftArrow}
            width={1000}
            height={1000}
            alt="image"
            className="w-full h-full   cursor-pointer"
          />
        </div>
        <div
          className="w-[63px] h-[63px] absolute top-[40%] xs:top-[43%] xl:mr-4 right-0 z-20 max-sm:hidden"
          onClick={handleNextSlide}
        >
          <Image
            src={RightArrow}
            width={1000}
            height={1000}
            alt="image"
            className="w-full h-full cursor-pointer"
          />
        </div>
      </div>
      </div> 
    </>
  );
};

export default SliderHero;