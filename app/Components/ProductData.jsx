import React from "react";
import Image from "next/image";
import Cart from "@/public/images/productCart.svg";
import ProductImage from "@/public/images/productImage.png";
import Link from "next/link";

const productData = [
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
  {
    name: "KM0075",
    price: "$45.00",
    description: "Bacillus Cereus Agar (MYP)",
  },
];

const ProductData = ({limit}) => {
  const displayedProducts = limit ? productData.slice(0, limit) : productData;
  
  return (
    <>
      <div className="mt-14">
        <div className="flex flex-wrap 2xl:justify-center justify-center xl:justify-normal gap-6">
          {displayedProducts.map((info, id) => (
            <div
              className="w-[298px]   bg-white shadow mb-[40px]"
              key={id} >
              <Link href="/singleProduct">
              <div className="flex items-center justify-between">
                <div className="w-[61px] h-12 bg-[#9e1f66] rounded-br-[15px] text-white text-base font-normal font-primary leading-normal flex justify-center items-center">
                  New
                </div>
                <div className="mr-2">
                  <Image src={Cart} />
                </div>
              </div>
              <div className="flex justify-center">
                <Image src={ProductImage} />
              </div>
              <div className=" border-t border-[#f3f3f3]">
                <div className="flex items-center justify-between mx-4 mt-3">
                  <div>
                    <h3 className="font-secondary">{info.name}</h3>
                  </div>
                  <div>
                    <span className="font-primary">{info.price}</span>
                  </div>
                </div>
                <div className="mx-4 mt-1">
                  <h3 className="mb-4 font-secondary">{info.description}</h3>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductData;
