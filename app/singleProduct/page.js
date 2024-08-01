import React from "react";
import ProductPage from "../Components/ProductPage";
import Banner from "../Components/Banner";

import SinglePageBottomNav from "../Components/SinglePageBottomNav";
import SingePageMainSection from "../Components/SingePageMainSection";

const page = () => {
  return (
    <>
      <ProductPage />
      <SinglePageBottomNav/>
      <SingePageMainSection/>

      <Banner />
    </>
  );
};

export default page;
