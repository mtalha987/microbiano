import React from "react";
import Image from "next/image";
import Cart from "@/public/images/productCart.svg";
import ProductImage from "@/public/images/productImage.png";
import ProductData from "./ProductData";

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
      <div className="xl:ml-[90px] 2xl:mx-5 ">
        <h2 className="text-[#18130f] text-[42px] font-normal font-['Arial'] text-center xl:text-left 2xl:text-center">
          Products
        </h2>
        <div className="flex xl:flex-nowrap flex-wrap justify-center xl:justify-normal 2xl:justify-center  gap-3 mt-7">
          {catalogeData.map((info, id) => (
            <div
              className="h-[35px] px-[15px] py-2.5 rounded-lg border border-black justify-center items-center gap-2.5 inline-flex"
              key={id}
            >
              <div>{info.name}</div>
            </div>
          ))}
        </div>
        <ProductData/>
        <div className="w-[163px] h-12 border border-[#9e1f66] text-[#9e1f66] text-base font-normal font-['Arial'] flex justify-center items-center mx-auto xs:mb-10">
          View all Products{" "}
        </div>
      </div>
    </>
  );
};

export default Products;
