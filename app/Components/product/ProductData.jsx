"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Cart from "@/public/images/productCart.svg";
import ProductImage from "@/public/images/productImage.jpeg";
import productData from "@/data/products";



const ProductData = ({
  initialLimit,
  selectedCategory,
  mobileLimit,
}) => {
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const updateLimitBasedOnScreenSize = () => {
      if (window.innerWidth <= 640) {
        // Mobile screen size (<= 640px)
        setLimit(mobileLimit);
      } else {
        setLimit(initialLimit);
      }
    };

    updateLimitBasedOnScreenSize();

    window.addEventListener("resize", updateLimitBasedOnScreenSize);

    return () => {
      window.removeEventListener("resize", updateLimitBasedOnScreenSize);
    };
  }, [initialLimit, mobileLimit]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;
  
  return (
    <>
          {displayedProducts.map((info, id) => (
            <div
              className={`xs:w-full bg-white shadow `}
              key={id} >
              <Link href={`/product/${info.name.toLowerCase().replace(/ /g, '-')}`}>
              <div className="flex items-center justify-between">
                <div className="w-[61px] h-12 bg-[#9e1f66] rounded-br-[15px] text-white text-base font-normal font-primary leading-normal flex justify-center items-center">
                  New
                </div>
                <div className="mr-2">
                  <Image src={Cart} />
                </div>
              </div>
              <div className="flex justify-center my-2">
                <Image src={ProductImage} className="h-[200px]  " />
              </div>
              <div className=" border-t border-[#f3f3f3]">
                <div className="flex items-center justify-between mx-4 mt-3">
                  <div>
                    <h3 className="font-secondary">{info.productCode}</h3>
                  </div>
                  <div>
                    <span className="font-primary">{info.price}</span>
                  </div>
                </div>
                <div className="mx-4 mt-1">
                  <h3 className="mb-4 font-secondary">{info.name}</h3>
                </div>
              </div>
              </Link>
            </div>
          ))}
    </>
  );
};

export default ProductData;
