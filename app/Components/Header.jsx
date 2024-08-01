"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import Search from "@/public/images/search-normal.svg";
import Cart from "@/public/images/cart.svg";
import Outlines from "@/public/images/outline.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();


  const getHeaderColor = () => {
    if (pathname === '/') return 'bg-[#f5e9f0]';
    return 'bg-white';
  };
  return (
    <>
      <div className= {`pt-8 xl:px-[90px] pg:mx-[40px] px-5 font-['Poppins']  ${getHeaderColor()}`}>
        <div className="flex flex-wrap justify-between">
          <div className="text-[#171717] text-[13px] leading-5 font-normal">
            <span>Sample@gmail.com</span>
            <span> / </span>
            <span>+04 89 76 4576</span>
          </div>
          <div>
            <span className="text-neutral-900 text-[13px] font-normal leading-tight uppercase">
              Open from 9am to 5pm - Closed on Weekends
            </span>
          </div>
        </div>
        <div className="w-full h-[0px] opacity-40 border border-neutral-800 mt-2 mb-5"></div>
        <div>
          <nav className="flex justify-between items-center">
            <Link href="/">
              <div>
                <Image src={Logo} alt="Logo" />
              </div>
            </Link>
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-[#262626] text-base font-medium leading-normal">
                <li className="text-[#9e1f66]">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">About Us</Link>
                </li>
                <li>
                  <Link href="/singleProduct">Shop</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="lg:flex items-center text-neutral-800 text-base font-normal font-['Poppins'] leading-normal hidden">
              <span className="flex">
                Shop <Image src={Search} alt="Search" className="ml-1" />
              </span>
              <span className="flex ml-6">
                Cart
                <Image src={Cart} alt="Cart" className="ml-1" />
              </span>
            </div>
            {/* For Mobile */}
            <div className="lg:hidden flex">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image src={Outlines} width={34} alt="Menu" />
              </button>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col gap-4 text-[#262626] text-base font-medium leading-normal">
                <li className="text-[#9e1f66]">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">About Us</Link>
                </li>
                <li>
                  <Link href="/singleProduct">Shop</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
              <div className="flex flex-col mt-4">
                <span className="flex mb-4">
                  Shop <Image src={Search} alt="Search" className="ml-1" />
                </span>
                <span className="flex">
                  Cart
                  <Image src={Cart} alt="Cart" className="ml-1" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
