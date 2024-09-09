import React from "react";
import Banner from "../../Components/common/Banner";
import SinglePageBottomNav from "../../Components/product/SinglePageBottomNav";
import SingePageMainSection from "../../Components/product/SingePageMainSection";
import PageNameBanner from "../../Components/common/PageNameBanner";
import ProductBanner from "@/public/images/productPageBanner.png"


const page = () => {
  return (
    <>
      <PageNameBanner title="Product Page" image={ProductBanner} />
      <SinglePageBottomNav />
      <SingePageMainSection />

      <Banner />
    </>
  );
};

export default page;
