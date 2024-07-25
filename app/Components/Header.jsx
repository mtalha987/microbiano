import React from "react";
import Image from "next/image";
import Logo from "../Images/logo.svg";
import Search from "../Images/search-normal.svg";
import Cart from "../Images/cart.svg";
import Outlines from "../Images/outline.svg";

const Header = () => {
  return (
    <>
      <div className="pt-8 xl:mx-[90px] lg:mx-[40px] mx-5 font-['Poppins']">
        <div className="flex flex-wrap justify-between">
          <div className="text-[#171717] text-[13px] leading-5 font-normal   ">
            <span>Sample@gmail.com</span>
            <span>/ </span>
            <span> +04 89 76 4576</span>
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
            <div>
              <Image src={Logo} />
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-[#262626] text-base font-medium leading-normal">
                <li className="text-[#9e1f66]">Home</li>
                <li>About Us</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="lg:flex items-center text-neutral-800 text-base font-normal font-['Poppins'] leading-normal hidden">
              <span className="flex">
                Shop <Image src={Search} className="ml-1" />
              </span>
              <span className="flex ml-6">
                Cart
                <Image src={Cart} className="ml-1" />
              </span>
            </div>
            <div className="lg:hidden flex">
        <Image src={Outlines}  width={34}/>

        </div>
          </nav>
          
        </div>
        {/* For Mobile */}
       
      </div>
    </>
  );
};

export default Header;
