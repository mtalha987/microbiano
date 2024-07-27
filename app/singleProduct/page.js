import React from "react";
import Header from "../Components/Header";
import ProductPage from "../Components/ProductPage";
import Banner from "../Components/Banner";
import Image from "next/image";
import ArrowLeft from "@/public/images/Arrow-left.svg";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <ProductPage />
      <div className="xl:mx-[90px] mt-10">
        <Link href="/product" className="inline-flex items-center gap-3">
          <Image src={ArrowLeft} />
          <span className="text-neutral-800 text-base font-medium font-['Poppins'] leading-normal">
            Back
          </span>
        </Link>
      </div>

      <Banner />
    </>
  );
};

export default page;
