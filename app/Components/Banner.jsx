import React from "react";
import Image from "next/image";
import BannerImg from "@/public/images/BannerCut.png";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="lg:mx-[90px]  lg:mt-[124px] mt-6 xs:mt-5 flex">
        <div className="w-[526px] h-[393px] relative hidden lg:block">
          <Image
            className="w-[809px] h-[524px] left-[0px] top-[-89px] absolute origin-top-left ml-14"
            src={BannerImg}
          />
        </div>
        <div className="w-full h-[318px] border border-white bg-[#9e1f66] flex flex-col xs:gap-4 md:pt-14 pt-4 md:pl-32 pl-4  ">
          <h2 className=" text-white text-[42px] font-normal font-['Arial']">
            Enjoy up to 10% off!!
          </h2>
          <p className="lg:w-[331px] text-white text-base font-normal font-['Inter'] leading-normal">
            Grab your limited-time discount and enjoy 10% off on all our
            products
          </p>
          <Link href="/product">
            <button className="text-[#9e1f66] text-base font-normal font-['Arial'] w-[134px] h-12 bg-white mt-7">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
