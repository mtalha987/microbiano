import React from "react";
import Image from "next/image";
import BannerImg from "@/public/images/BannerCut.png";
import Link from "next/link";
import ZLine from "@/public/images/Vector1.svg";

const Banner = () => {
  return (
    <>
    <div className="xl:px-[90px] lg:px-[40px] px-5 xs:px-0 sm:h-[393px] relative mt-24">
      <div className="flex ">
        <div className="absolute hidden lg:block">
          <Image src={BannerImg} alt="Banner Image" />
        </div>
        <div className="sm:h-[334px] w-full bg-secondary mt-8 p-3 ">
          <div className="border border-white h-[314px]  2xl:pl-[50%] xl:pl-[50%] lg:pl-[54%] sm:pl-10 xs:pl-3 ">
            <div>
              <h2 className="md:w-[539px] sm:mt-[50px] text-white text-[42px] font-normal font-['Arial'] xs:w-[90%]">Enjoy up to 10% off!!</h2>
            </div>
            <div>
              <Image src={ZLine} alt="Z Line Image" className="sm:ml-36" />
            </div>
            <div>
              <p className="md:w-[331px] mt-2 text-white text-base font-normal font-['Inter'] leading-normal">
                Grab your limited-time discount and enjoy 10% off on all our
                products
              </p>
            </div>
            <div>
              <button className="text-secondary  text-base font-normal font-['Arial'] w-[134px] h-12 bg-white mt-7">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Banner;
