"use client"
import React from "react";
import { useState } from 'react';
import Banner from "../../Components/common/Banner";
import PageNameBanner from "../../Components/common/PageNameBanner";
import ProductBanner from "@/public/images/productPageBanner.png"
import BackButton from "@/app/Components/product/BackButton";
import ProductMainDetail from "@/app/Components/product/ProductMainDetail";
import RelatedProducts from "@/app/Components/product/RelatedProducts";
import Popup from "@/app/Components/product/Popup";


const page = () => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <PageNameBanner title="Product Page" image={ProductBanner} />
      <BackButton/>
      <ProductMainDetail openPop={setIsPopupOpen}/>
      <RelatedProducts/>
      <Banner />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default page;
