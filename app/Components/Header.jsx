"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import MenuOpen from "@/public/images/menuOpen.svg";
import MenuClose from "@/public/images/menuClose.svg";
import RightArrow from "@/public/images/rightArrow.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const pathname = usePathname();

  const getHeaderColor = () => {
    if (pathname === "/") return "bg-[#f5e9f0]";
    return "bg-white";
  };

  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimatingOut(true); // Start the closing animation
      setTimeout(() => {
        setIsAnimatingOut(false);
        setIsOpen(false); // Close the menu after the animation completes
      }, 400); // Duration of the moveOut animation (in milliseconds)
    } else {
      setIsOpen(true); // Open the menu
    }
  };
  const handleLinkClick = () => {
    toggleMenu();
  };
  return (
    <>
      <div className={`pt-5 xl:px-[90px] lg:px-10 px-5   ${getHeaderColor()}`}>
        <div className="hidden 2xl:max-w-[1440px] 2xl:mx-auto lg:flex flex-wrap justify-between text-neutral-dark-gray text-[13px] font-primary ">
          <div className="leading-5 font-normal ">
            <span>Sample@gmail.com</span>
            <span> / </span>
            <span>+04 89 76 4576</span>
          </div>
          <div>
            <span className="font-normal leading-tight uppercase">
              Open from 9am to 5pm - Closed on Weekends
            </span>
          </div>
        </div>
        <div className="w-full 2xl:max-w-[1440px] 2xl:mx-auto h-[0px] opacity-40 border border-neutral-gray mt-2 mb-5 hidden lg:block"></div>

        <nav className="flex items-center justify-between 2xl:max-w-[1440px] 2xl:mx-auto  ">
          <div>
            <Link href="/">
              <Image src={Logo} alt="StomaFlex Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="xl:mr-[205px] lg:mr-[120px] sm:mr-10 mr-4 text-neutral-gray text-base font-normal font-primary leading-normal">
              <ul className="flex lg:gap-8 gap-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/product">Product</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="px-[25px] py-3 bg-secondary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="">
              {isOpen ? (
                <Image src={MenuClose} alt="Menu Close Icon" />
              ) : (
                <Image src={MenuOpen} alt="Menu Open Icon" />
              )}
            </button>
          </div>
        </nav>
        <div className="w-full h-[0px] opacity-40 border border-[#0000004D] lg:hidden mt-5"></div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`lg:hidden w-full left-0 absolute z-20  ${getHeaderColor()} flex items-center  flex-col  transition-all duration-700 ease-in-out  ${
              isAnimatingOut ? "animationMoveOut " : "animationMove h-[87vh]"
            } `}
          >
            <ul className="flex items-center w-full flex-col gap-8 pt-4 text-black text-base font-normal font-secondary leading-tight">
              <li>
                <Link href="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li>
                <Link href="/about" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D]  "></div>

              <li>
                <Link href="/product" onClick={handleLinkClick}>
                  Product
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D] "></div>

              <li>
                <Link href="/contact" onClick={handleLinkClick}>
                  Contact Us
                </Link>
              </li>
              <div className="w-full h-[0px] opacity-40 border border-[#0000004D]  "></div>
            </ul>
            <div className="px-[25px] mt-12 py-3 bg-secondary justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
            </div>
            <div className="flex gap-2 mt-10 mb-32">
              <SocialIcons icon={<FaFacebookF />} />
              <SocialIcons icon={<FaTwitter />} />
              <SocialIcons icon={<AiFillInstagram />} />
              <SocialIcons icon={<FaYoutube />} />
    
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
