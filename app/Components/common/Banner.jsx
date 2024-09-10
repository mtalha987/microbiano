import React from "react";
import Image from "next/image";
import BannerImg from "@/public/images/BannerCut.png";
import Link from "next/link";
import ZLine from "@/public/images/Vector1.svg";

const Banner = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  xl:px-[90px] lg:px-10 px-5 sm:h-[493px] relative mt-24 flex items-center">
        <div className="flex items-center ">
          <div className="absolute hidden lg:block">
            <Image src={BannerImg} alt="Banner Image" className=" mt-5 " />
          </div>
          <div className=" w-full bg-secondary mt-8 p-3 ">
            <div className="border border-white py-10 2xl:pl-[40%] xl:pl-[50%] lg:pl-[54%] sm:pl-10 xs:pl-3 ">
              <div>
                <h2 className="2xl:w-[95%] xl:w-[90%]  text-white text-[42px] font-normal font-arial xs:w-[90%]">
                  Save Up to 10% on Quality Microbiological Products
                </h2>
              </div>
              <div>
                <Image src={ZLine} alt="Z Line Image" className="sm:ml-36" />
              </div>
              <div>
                <p className="md:w-[79%] mt-2 text-white text-base font-normal font-secondary leading-normal">
                  Take advantage of up to 10% off on our top-tier
                  microbiological products and enhance your laboratory's
                  efficiency. Order now to secure your discount and advance your
                  research with our reliable, high-quality solutions.
                </p>
              </div>
              <div>
                <button className="text-secondary  text-base font-normal font-arial w-[134px] h-12 bg-white mt-7">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
