import React from "react";
import ProductData from "../product/ProductData";
import MobileDropDown from "../common/MobileDropDown";
import categoryList from "@/data/CategoryList";
import Link from "next/link";

const ProductSection = () => {
  return (
    <>
      <div className="xl:px-[90px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:px-10 px-5">
        <div className="flex justify-between   items-center xs:gap-2">
          <h2 className="text-[#18130f] text-[42px] font-normal font-arial text-center xl:text-left 2xl:text-center">
            Microbiological Products for Every Need
          </h2>
          <MobileDropDown />
        </div>
        <div className="md:flex  flex-wrap font-arial justify-start xl:justify-normal   gap-3 mt-7 hidden">
          {categoryList.map((info, id) => (
            <div
              className=" px-[15px] py-2.5 rounded-lg border border-black justify-center items-center gap-2.5 inline-flex"
              key={id}
            >
              <div>{info.name}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 mt-14 xl:gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <ProductData
            initialLimit={8}
            mobileLimit={4}
            selectedCategory="All Products"
          />
        </div>

        <div className="w-[164px] mt-10 h-12 border border-[#9e1f66] text-[#9e1f66] text-base font-normal font-arial flex justify-center items-center mx-auto xs:mb-10">
          <Link href="/product">View all Products </Link>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
