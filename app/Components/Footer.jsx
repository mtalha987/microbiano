import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import SocialIcons from "./common/SocialIcons";

const Footer = () => {
  return (
    <>
      <div className="xl:px-[90px] lg:px-10 px-5 lg:mt-[100px]  bg-[#f9f9f9] flex flex-col ">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  2xl:max-w-[1440px] 2xl:mx-auto  gap-10 lg:pt-[90px] pt-10">
          {/* Col1 */}
          <div>
            <div className="ml-2">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="mt-9">
              <p className="w-[72%] xs:w-full text-[#716b66] text-base font-normal font-secondary leading-normal">
                Safecare Prepared plates and broth tested in accordance with
                CLSI M22 A3- Quality assurance for Commercially Prepared
                Microbiological Culture Media – second edition.
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1e1e1e] text-xl font-normal font-arial">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-5 text-[#716b66] text-base font-normal font-secondary">
                <li>Home</li>
                <li>About Us</li>
                <li>Product</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          {/* Col 3 */}
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1e1e1e] text-xl font-normal font-arial">
                News Letter
              </h3>
              <p className="text-[#716b66] text-base font-normal font-primary leading-normal">
                Over 750+ people have subscribed.
              </p>
              <div>
                <form className="flex">
                  <input
                    type="text"
                    className="w-full h-12 px-[22px] py-3.5 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#9d9996] text-[13px] font-normal font-secondary leading-tight"
                    placeholder="Enter your Email"
                  />
                  <button className="w-[134px] h-12 bg-[#9e1f66] text-white text-base font-normal font-arial ml-2">
                    Shop Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Col 4 */}
          <div>
            <div>
              <h2 className=" text-[#1e1e1e] text-xl font-normal font-arial">
                Social Links
              </h2>
              <div className="flex gap-2 mt-5">
                <SocialIcons icon={<FaFacebookF />} />
                <SocialIcons icon={<FaTwitter />} />
                <SocialIcons icon={<AiFillInstagram size={22} />} />
                <SocialIcons icon={<FaYoutube size={22} />} />
              </div>
            </div>
          </div>
          {/* Col 6 */}
          <div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[#1e1e1e] text-xl font-semibold font-secondary">
                Accreditation
              </h2>
              <div className="flex flex-col gap-4  text-[#716b66] text-base font-normal font-secondary leading-normal">
                <p>ISO 9001:2015 – Quality Management System</p>
                <p>ISO 13485:2016 – Culture Media Manufacturing</p>
                <p>CE – European Compliance</p>
                <p>
                GMP – Certified by the Ministry of Health UAE
                </p>
                <p>MOH License – Ministry of Health Certification</p>
              </div>
            </div>
          </div>
        </div>

        {/*  CopyRight Section */}

        <div className="lg:mt-24 mt-5">
          <div className="w-full h-[0px] border border-neutral-light"></div>
          <div className="py-6">
            <h3 className="text-[#9f9f9f] text-base font-normal font-secondary text-center">
              Copyright 2024 Microbiano Ltd | All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
