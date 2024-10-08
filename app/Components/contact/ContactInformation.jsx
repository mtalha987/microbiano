import React from "react";
import LocationIcon from "@/public/images/locationIcon.svg";
import EmailIcon from "@/public/images/emailIcon.svg";
import PhoneIcon from "@/public/images/phoneIcon.svg";
import CardContact from "./CardContact";

const ContactInformation = () => {
  return (
    <>
      <h2 className="text-black text-center text-[32px] font-normal font-arial mt-36">
        Contact Information
      </h2>
      <p className="lg:w-[548px] xs:px-5  mx-auto text-center text-black text-base font-normal font-secondary leading-normal mt-2">
        Feel free to contact us through any of the contact methods listed above,
        and we will get back to you as soon as possible.
      </p>
      <div className="flex flex-wrap gap-5 justify-center 2xl:max-w-[1440px] 2xl:mx-auto  xl:mx-[90px] lg:mx-10 mx-5">
        <CardContact image={PhoneIcon} title="Phone:" info="(12+) 123 3456" />
        <CardContact
          image={EmailIcon}
          title="Email:"
          info="support@yoursite.com"
        />
        <CardContact
          image={LocationIcon}
          title="Location:"
          info="Microbioano KHI-8-18 – Abu Dhabi, United Arab Emirates"
        />
      </div>
    </>
  );
};

export default ContactInformation;
