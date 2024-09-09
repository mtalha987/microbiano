import React from 'react'
import Image from "next/image";
import ArrowLeft from "@/public/images/Arrow-left.svg";
import Link from "next/link";

const SinglePageBottomNav = () => {
  return (
    <>
     <div className="2xl:max-w-[1440px] 2xl:mx-auto xl:mx-[90px] lg:mx-10 mx-5 mt-10 flex xs:flex-col xs:items-start justify-between items-center flex-wrap xs:mb-5">
        <Link href="/product" className="inline-flex items-center gap-3">
          <Image src={ArrowLeft} />
          <span className="text-neutral-800 text-base font-medium font-['Poppins'] leading-normal">
            Back
          </span>
        </Link>
        <div className="lg:w-[350px] xs:mt-5">
            <form className="flex">
              <input
                type="text"
                className="w-full xl:w-[400px]  h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-['Poppins'] leading-tight"
                placeholder="Search"
              />
            </form>
          </div>
      </div>
    </>
  )
}

export default SinglePageBottomNav