import React from "react";
import Image from "next/image";
import ProductData from "./ProductData";

const ProductSection = () => {
  return (
    <>
      <div className="flex xl:mx-[90px] lg:mx-10 gap-10">
        <div className="w-[31%] mt-14">
          <div>
            <form className="flex">
              <input
                type="text"
                className="w-full xl:w-[400px]  h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-['Poppins'] leading-tight"
                placeholder="Search"
              />
            </form>
          </div>

          <div>
            
          </div>
        </div>
        <div className="w-[66%]">
          <ProductData />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
