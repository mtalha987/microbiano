import React from "react";
import Hero from "../Components/contact/Hero";
import ContactInformation from "../Components/contact/ContactInformation";
import PageNameBanner from "../Components/common/PageNameBanner";
import ProductPageBanner from "@/public/images/productPageBanner.png";
import TouchUs from "../Components/contact/TouchUs";

export const metadata = {
  title:
    "Contact Us | Microbiano - Expert Support for Microbiological Products",
  description:
    "Have questions or need assistance? Contact Microbiano to learn more about our microbiological products and services. Our dedicated team is ready to provide the support and information you need. Reach out to us today!",
};

const page = () => {
  return (
    <>
      <PageNameBanner title="Contact Us" image={ProductPageBanner} />
      <TouchUs />
      <ContactInformation />
    </>
  );
};

export default page;
