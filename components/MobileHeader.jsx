"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBoxes,
  FaClipboardList,
  FaInfoCircle,
  FaQuestionCircle,
  FaStar,
  FaStore,
  FaThList,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { PiSignInLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export default function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="block md:hidden  flex flex-col w-full">
      <div>
        <div className="flex p-2 justify-between  items-center px-4 ">
          <Image src="/images/logo.jpg" alt="logo" width={100} height={120} />
          <GiHamburgerMenu
            onClick={() => {
              setIsSidebarOpen(true);
            }}
            className="cursor-pointer"
            size={24}
          />
        </div>
        <div className="py-2 mb-[6px] px-[8px]">
          <div className="border border-[#EFF0F5] bg-[#EFF0F5] relative rounded-xl overflow-hidden">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-[#EFF0F5] w-[90%] border-none outline-none focus:outline-none focus:border-none py-[8px] ml-[14px]  pr-[60px]"
            />
            <div className="absolute inset-y-0 right-0 bg-[#F97316] bg-orange px-4 flex items-center rounded-xl ">
              <IoSearchOutline
                className="cursor-pointer"
                color="white"
                size={20}
              />
            </div>
          </div>
        </div>

        {isSidebarOpen && (
          <>
            <div
              onClick={() => setIsSidebarOpen(false)}
              className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-40 z-40"
            ></div>

            <div className="fixed top-0 left-0 w-4/5  bg-white z-50 px-4 py-6 shadow-lg rounded-tr-lg rounded-br-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[28px] font-bold text-orange-500">Menu</h2>
                <RxCross2
                  color="orange"
                  className="cursor-pointer"
                  size={30}
                  strokeWidth={2}
                  onClick={() => setIsSidebarOpen(false)}
                />
              </div>

              <ul>
                <Link href="/signup-login">
                  <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                    <PiSignInLight color="orange" size={24} />
                    Signup/Login
                  </li>
                </Link>
                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaStore color="orange" size={24} />
                  Become a Seller
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaThList color="orange" size={24} />
                  Category
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaBoxes color="orange" size={24} />
                  Products
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaStar color="orange" size={24} />
                  Featured Products
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaStar color="orange" size={24} />
                  New Arrivals
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaStar color="orange" size={24} />
                  Best Sellers
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaClipboardList color="orange" size={24} />
                  Order Track
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaQuestionCircle color="orange" size={24} />
                  Help Center
                </li>

                <li className="text-[22px] text-gray-800 hover:text-orange-500 cursor-pointer transition-all duration-300 border-b border-orange-400 py-[8px] flex gap-[12px] items-center">
                  <FaInfoCircle color="orange" size={24} />
                  About Us
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
