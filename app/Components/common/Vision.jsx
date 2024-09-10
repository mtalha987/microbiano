import React from "react";
import Image from "next/image";
import Vector from "@/public/images/Vector1.svg";
import VisionImg from "@/public/images/vision.png";
import VisionIcon from "@/public/images/visionIcon.svg";
import MissionIcon from "@/public/images/missionIcon.svg";

const Vision = () => {
  return (
    <>
      <div className=" 2xl:max-w-[1440px] 2xl:mx-auto 2xl:p-0 xl:px-[90px] lg:px-10 px-5 lg:mt-16 sm:mt-6  flex flex-wrap xl:flex-nowrap   lg:justify-between justify-center">
        {/* Section 2 */}
        <div className="lg:w-6/12 xl:w-[75%]  ">
          <div className="lg:mt-28 sm:mt-8 xs:mt-14">
            <h2 className="text-secondary text-[42px] font-normal font-arial text-center lg:text-left">
              Our Vision and Mission
            </h2>
            <Image
              src={Vector}
              className="sm:ml-48 xs:ml-9 xs:mt-3 mb-9 lg:mb-0"
            />
          </div>
          <div className="xs:mt-2">
            <div className="flex flex-col justify-center items-center lg:items-start gap-2">
              <div className="flex items-center   gap-4">
                <div className="w-[52px] h-[52px]  rounded-[100px]">
                  <Image src={VisionIcon} alt="Vision" />
                </div>
                <h3 className="text-light-black text-[28px] font-normal font-secondary">
                  Vision
                </h3>
              </div>
              <p className="w-[70%]  xs:w-[100%] text-black text-base font-normal font-secondary leading-normal sm:ml-[70px] mt-5">
                We aim to deliver high-quality, cost-effective,
                microbiologically prepared culture media to the UAE and GCC
                markets. We aspire to be the leading provider of reliable and
                comprehensive microbiological solutions that cater to our
                client's diverse needs.
              </p>
            </div>
            <div className="mt-12 flex flex-col justify-center items-center lg:items-start gap-2">
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px]  rounded-[100px]">
                  <Image src={MissionIcon} alt="Mission" />
                </div>
                <h3 className="text-light-black text-[28px] font-normal font-secondary">
                  Mission
                </h3>
              </div>
              <p className="w-[70%]  xs:w-[100%] text-black text-base font-normal font-secondary leading-normal sm:ml-[70px] mt-5">
                Our mission is to manufacture and supply premium ready-to-use
                culture media and broths, ensuring exceptional quality and
                consistency. We are dedicated to serving the UAE and GCC
                countries with top-tier products that facilitate accurate and
                efficient microbiological testing.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-6/12  lg:relative flex justify-end ">
          <Image src={VisionImg} className="mt-12 xl:ml-12 lg:mt-0" />
          <div className="w-[155px] h-[397px] bg-secondary lg:absolute -z-10  hidden xl:block top-28 left-16 2xl:left-0" />
        </div>
      </div>
    </>
  );
};

export default Vision;
