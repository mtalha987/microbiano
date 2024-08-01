import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import SocialIcons from "@/public/images/scoial.png";

const Footer = () => {
  return (
    <>
      <div className="lg:px-24 lg:mt-[100px] bg-[#f9f9f9] flex flex-col ">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mx-20 xs:mx-5  gap-10 lg:pt-[90px] pt-10">
          {/* Col1 */}
          <div>
            <div className="ml-2">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="mt-9">
              <p className="w-[72%] xs:w-full text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                Safecare Prepared plates and broth tested in accordance with
                CLSI M22 A3- Quality assurance for Commercially Prepared
                Microbiological Culture Media – second edition.
              </p>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[#1e1e1e] text-xl font-normal font-['Arial']">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-5 text-[#716b66] text-base font-normal font-['Inter']">
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
              <h3 className="text-[#1e1e1e] text-xl font-normal font-['Arial']">
                News Letter
              </h3>
              <p className="text-[#716b66] text-base font-normal font-['Poppins'] leading-normal">
                Over 750+ people have subscribed.
              </p>
              <div>
                <form className="flex">
                  <input
                    type="text"
                    className="w-full h-12 px-[22px] py-3.5 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#9d9996] text-[13px] font-normal font-['Inter'] leading-tight"
                    placeholder="Enter your Email"
                  />
                  <button className="w-[134px] h-12 bg-[#9e1f66] text-white text-base font-normal font-['Arial'] ml-2">
                    Shop Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Col 4 */}
          <div>
            <div>
              <h2 className=" text-[#1e1e1e] text-xl font-normal font-['Arial']">
                Social Links
              </h2>
              <div className="mt-5">
                <Image src={SocialIcons} alt="social icons" />
              </div>
            </div>
          </div>
          {/* Col-5 */}
          <div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[#1e1e1e] text-xl font-semibold font-['Inter']">
                Key features
              </h2>
              <div className="flex flex-col gap-4  text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                <p>
                  All our PPM products are quality assures and manufacturing
                  facilities adhere to Good Manufacturing Practice Guidelines.
                </p>
                <p>
                  We produce our PPM products using high quality dehydrated
                  culture media/ supplements and automated production lines to
                  get consistent performance.
                </p>
                <p>
                  Safecare follows the stringent stands of Good Manufacturing
                  Practices (GMP) defined and approved by Ministry of Health
                  UAE.
                </p>
                <p>Class 10,000 validated clean area</p>
                <p>Fully automated 6 line production lines.</p>
                <p>
                  Fully automatic online quality inspection composed of camera
                  vision system for poured plates for capturing the images of
                  the dishes and High speed expulsion station for extracting the
                  not suitable dishes.
                </p>
                <p>
                  Warehouse logistics function and warehouse located in Abu
                  Dhabi, Dubai, Sharjah Emirates with Refrigerated vehicle
                  facilitating the timeframe delivery .
                </p>
              </div>
            </div>
          </div>
          {/* Col 6 */}
          <div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[#1e1e1e] text-xl font-semibold font-['Inter']">
                Accreditation
              </h2>
              <div className="flex flex-col gap-4  text-[#716b66] text-base font-normal font-['Inter'] leading-normal">
                <p>ISO 9001: 2015 Quality Management System</p>
                <p>
                  ISO 13485: 2016 The development, manufacture and supply of
                  ready-to-use culture media
                </p>
                <p>CE ( European Conformity )</p>
                <p>
                  International Good Manufacturing Practices (GMP) which is
                  certified by Ministry of Health UAE.
                </p>
                <p>MOH License</p>
              </div>
            </div>
          </div>
        </div>

        {/*  CopyRight Section */}

        <div className="lg:mt-24 mt-5">
          <div className="w-full h-[0px] border border-neutral-300"></div>
          <div className="py-6">
            <h3 className="text-[#9f9f9f] text-base font-normal font-['Inter'] text-center">
              Copyright 2024 Microbiano Ltd | All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
