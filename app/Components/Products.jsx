import React from "react";
import Image from "next/image";
import Cart from "../Images/productCart.svg"
import ProductImage from "../Images/productImage.png"

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

  const productData = [
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
    {
        name: "KM0075",
        price: "$45.00",
        description: "Bacillus Cereus Agar (MYP)"
    },
  ]
  return (
    <>
      <div className="xl:ml-[90px] 2xl:mx-5 " >
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
        <div className="mt-14">
            <div className="flex flex-wrap 2xl:justify-center justify-center xl:justify-normal gap-6">
            {productData.map((info, id) => (
                <div className="xl:w-[298px] 2xl:w-auto  bg-white shadow mb-[40px]" key={id}>
                    <div className="flex items-center justify-between">
                        <div className="w-[61px] h-12 bg-[#9e1f66] rounded-br-[15px] text-white text-base font-normal font-['Poppins'] leading-normal flex justify-center items-center">
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
                            <div><h3>{info.name}</h3></div>
                            <div><span>{info.price}</span></div>
                        </div>
                        <div className="mx-4 mt-1">
                            <h3 className="mb-4">{info.description}</h3>
                        </div>
                    </div>
                </div>
            ))}
            </div>
          
        </div>
        <div className="w-[163px] h-12 border border-[#9e1f66] text-[#9e1f66] text-base font-normal font-['Arial'] flex justify-center items-center mx-auto xs:mb-10">View all Products </div>
      </div>
    </>
  );
};

export default Products;
