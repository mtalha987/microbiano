import React from "react";
import Image from "next/image";
import Cart from "@/public/images/productCart.svg";
import ProductImage from "@/public/images/productImage.png";
import ProductData from "./ProductData";
import Link from "next/link";
import MobileDropDown from "./MobileDropDown";

const Products = () => {
  const catalogeData = [
    {
      name: "All Products",
    },
    {
      name: "Clinical",
    },
    {
      name: "Veterinary Food",
    },
    {
      name: "water & Environmental",
    },
    {
      name: "Pharmaceutical",
    },
    {
      name: "Industrial and Cosmetic",
    },
  ];

  return (
    <>
      <div className="xl:ml-[90px] 2xl:px-[90px] lg:px-[40px] px-4 ">
        <div className="xs:flex xs:justify-between xs:mx-2 xs:items-center xs:gap-2">
          <h2 className="text-[#18130f] text-[42px] font-normal font-['Arial'] text-center xl:text-left 2xl:text-center">
            Products
          </h2>
          <MobileDropDown />
        </div>
        <div className="flex xl:flex-nowrap flex-wrap justify-center xl:justify-normal 2xl:justify-center  gap-3 mt-7 xs:hidden">
          {catalogeData.map((info, id) => (
            <div
              className="h-[35px] px-[15px] py-2.5 rounded-lg border border-black justify-center items-center gap-2.5 inline-flex"
              key={id}
            >
              <div>{info.name}</div>
            </div>
          ))}
        </div>
        <ProductData limit={8} />
        <Link href="/product">
          <div className="w-[163px] h-12 border border-[#9e1f66] text-[#9e1f66] text-base font-normal font-['Arial'] flex justify-center items-center mx-auto xs:mb-10">
            View all Products{" "}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Products;
