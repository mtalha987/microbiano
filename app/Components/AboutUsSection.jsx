import React from "react";
import Image from "next/image";
import Doctor from "@/public/images/doctor.png";
import Vector from "@/public/images/Vector1.svg";

const AboutUsSection = () => {
  return (
    <>
      <div className="bg-[#f5e9f0]/80  2xl:px-0  xl:px-[90px] lg:px-10 px-5 lg:h-[568px] xl:mt-[182px] sm:mt-[50px] ">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto flex sm:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-normal gap-[93px] 2xl:gap-[350px]">
          <div className="lg:relative lg:-top-9 sm:mt-5 lg:mt-0  xs:hidden ">
            <Image src={Doctor} />
          </div>
          <div className="xs:mt-5">
            <h2 className="text-secondary text-[42px] font-normal font-arial lg:mt-[102px] ">
              About Us
            </h2>
            <div>
              <Image src={Vector} />
            </div>
            <div>
              <p className="w-[489px] xs:w-full  text-[#151515] text-base font-normal font-secondary leading-normal mt-5">
                Safecare Industries located in KEZAD- Abu Dhabi with fully
                automated manufacturing facilities specialized in manufacturing
                and supplying an extensive range of Microbiological Pre-poured
                Culture Media (PPM), Pre-poured Tubed Media and Bottle Media.
                All operational functions adhere to the required industry
                compliance criteria.
              </p>
            </div>
            <div className="mt-[42px] mb-10 lg:mb-0 ">
              <button className="text-white text-base font-normal font-arial w-[134px] h-12 bg-secondary">
                Enquire now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
