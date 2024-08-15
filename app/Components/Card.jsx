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
      <div className="mx-auto mt-[54px] mb-[145px] flex flex-wrap lg:flex-nowrap justify-center sm:ml-5 overflow-hidden">
        {cardData.map((info,id)=>(
            <div className=" mt-10 lg:mt-0 ">
            <div className="xl:w-[400px] sm:w-[350px] xs:w-[300px]  xl:flex-nowrap sm:flex-wrap  relative -z-10 h-56 flex bg-dog-food bg-cover bg-no-repeat	 bg-[#f5e9f0] sm:mr-5 xs:gap-4" key={id}>
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
