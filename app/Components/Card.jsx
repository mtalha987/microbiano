import React from "react";
import Image from "next/image";
import Dog from "@/public/images/dog.png";
const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Veterinary Food",
      image: Dog,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
        id: 2,
        title: "Veterinary Food",
        image: Dog,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
      {
        id: 3,
        title: "Veterinary Food",
        image: Dog,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      },
  ];

  return (
    <>
      <div className=" 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-10 px-5 mt-[54px] mb-[145px] gap-5 flex flex-wrap lg:flex-nowrap justify-center  overflow-hidden">
        {cardData.map((info,id)=>(
            <div className=" mt-10 lg:mt-0 w-[85%] xs:w-[100%] lg:w-[407px] 2xl:w-[466px] ">
            <div className=" flex xl:flex-nowrap sm:flex-wrap  relative -z-10   bg-dog-food bg-cover bg-no-repeat	 bg-[#f5e9f0]" key={id}>
                <h2 className="text-[#5f1654] text-[28px] font-normal font-arial mt-[176px] ml-4">{info.title}</h2>
                <Image src={info.image} width={256} height={208} className="w-64 h-52 absolute -z-10 right-0 bottom-0" />
              </div>
            </div>
        ))}
        
      </div>
    </>
  );
};

export default Card;
