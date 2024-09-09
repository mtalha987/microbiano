import React from "react";
import Image from "next/image";
import ProductData from "../common/ProductData";
import ArrowDown from "@/public/images/arrow-down.svg";

const ProductSection = () => {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal 2xl:max-w-[1440px] 2xl:mx-auto  xl:mx-[90px] lg:mx-10 mx-5 gap-10">
        <div className="xl:w-[22%]  2xl:w-[25%] sm:w-[55%] xs:w-full mt-14">
          <div className="2xl:w-[320px] ">
            <form className="flex">
              <input
                type="text"
                className="w-full xl:w-[400px]  h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-['Poppins'] leading-tight"
                placeholder="Search"
              />
            </form>
          </div>

          <div className="2xl:w-[320px]   bg-white shadow mt-5 pb-5">
            <div className="flex items-center content-center justify-between pt-6 mx-4">
              <div>
                <h2 className="text-[#18130f] text-2xl font-normal font-arial leading-[28.80px]">
                  Categories
                </h2>
              </div>
              <div>
                <Image src={ArrowDown} />
              </div>
            </div>
            <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>

            <div className="pb-4 lg:pb-0">
              <div className="flex gap-3 mx-4 mt-4">
                <div className="w-6 h-6 border border-[#5F1654]  rounded-full flex justify-center items-center content-center">
                  <div className="w-4 h-4 border border-[#5F1654]  bg-[#5F1654]  rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                  Prepared Cultured Media Plates 
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 mx-4 mt-4">
                <div className="w-6 h-6 border border-[#9D9996]  rounded-full flex justify-center items-center content-center">
                  <div className="w-4 h-4   rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                  Prepared Culture Media Tube
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 mx-4 mt-4">
                <div className="w-6 h-6 border border-[#9D9996]  rounded-full flex justify-center items-center content-center">
                  <div className="w-4 h-4   rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                  Prepared culture media bottles
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 mx-4 mt-4">
                <div className="w-6 h-6 border border-[#9D9996]  rounded-full flex justify-center items-center content-center">
                  <div className="w-4 h-4   rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                  CLinical & Veterinary Products
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 mx-4 mt-4">
                <div className="w-6 h-6 border border-[#9D9996]  rounded-full flex justify-center items-center content-center">
                  <div className="w-4 h-4   rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                  Food, Water & Environmental
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 mx-4 mt-4">
                <div className="w-6 h-6 border border-[#9D9996]  rounded-full flex justify-center items-center content-center">
                  <div className="w-4 h-4   rounded-full"></div>
                </div>
                <div>
                  <h2 className="text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                  Pharma & Industrial
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" 2xl:w-[120%] lg:w-[150%]  xs:w-full ">
          <ProductData />
          <div className="flex gap-2 justify-center lg:mt-16 mt-5 lg:mb-20 mb-5 ">
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center rotate-90">
              <Image src={ArrowDown} />
            </div>
            <div className="w-10 h-10  shadow flex justify-center items-center bg-[#9e1f66] text-[white] text-base font-normal font-['Poppins'] leading-normal">
              1
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center text-[#554e49] text-base font-normal font-['Poppins'] leading-normal">
              2
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center text-[#554e49] text-base font-normal font-['Poppins'] leading-normal">
              3
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center text-[#554e49] text-base font-normal font-['Poppins'] leading-normal">
              4
            </div>
            <div className="w-10 h-10 bg-white shadow flex justify-center items-center -rotate-90">
              <Image src={ArrowDown} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
