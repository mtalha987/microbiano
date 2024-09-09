import React from "react";
import Image from "next/image";
import SingleMain from "@/public/images/singleMain.svg";
import TabsProduct from "./TabsProduct";
import RelatedProducts from "./RelatedProducts";

const SingePageMainSection = () => {
  return (
    <>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto xl:mx-[90px] lg:mx-10 mx-5 flex flex-wrap md:flex-nowrap xl:gap-[90px] md:gap-10 ">
        <div className="md:w-6/12 bg-white shadow md:mt-0 mt-10">
          <Image src={SingleMain} />
        </div>
        <div className="md:w-6/12">
          <div>
            <h2 className="text-[#18130f] text-[28px] font-medium font-['Inter'] leading-[33.60px] mt-5">Bacillus Cereus Agar (MYP)</h2>
            <h2 className="text-[#18130f] text-[28px] font-medium font-['Poppins'] leading-[33.60px] mt-1">SKU: KM0075</h2>
            <p className="text-[#716b66] text-[13px] font-medium font-['Poppins'] leading-tight mt-3"> <span className="text-[#adadad] text-[13px] font-normal font-['Poppins'] leading-tight"> Category:</span> Dehydrated Culture Media</p>
            <p className="text-[#716b66] text-[13px] font-medium font-['Poppins'] leading-tight mt-1"> <span className="text-[#adadad] text-[13px] font-normal font-['Poppins'] leading-tight"> Tags:</span>  Aquaculture</p>
            <p className="xl:w-[586px] text-[#716b66] text-base font-normal font-['Poppins'] leading-normal mt-10 ">
              Alkaline peptone water is generally used as an enrichment medium
              in the isolation of Vibrio spp. from faeces. This medium may also
              be used for the enrichment of Vibrio spp. from food and water
              samples.<br/><br/> First developed by Shread, Donovan and Lee as an
              enrichment broth for the growth of Aeromonas spp., Cruickshank
              showed that with a higher pH the medium can be used for the
              enrichment of Vibrio spp.<br/><br/> The peptone is the source of the
              required nitrogen, carbon and vitamins. Sodium chloride maintains
              the osmotic balance. The high pH of the medium inhibits most
              enteric organisms for at least 24 hours.
            </p>
            <button className="w-[204px] h-12 bg-[#9e1f66] text-white text-base font-normal font-['Arial'] mt-10 xs:mb-10">Enquire about Product</button>
          </div>
        </div>
      </div>
      <TabsProduct/>
      <RelatedProducts/>
    </>
  );
};

export default SingePageMainSection;
