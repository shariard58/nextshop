/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
export default function page() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  return (
    <div className="h-[100vh] flex justify-center items-center bg-[#F0F0F0]">
      <form className="w-full flex flex-col sm:w-[80%] md:w-[60%] md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:px-[74px] md:px-[60px] sm:px-[40px] lg:py-[40px] md:py-[36px] sm:py-[30px] lg:gap-[44px] md:gap-[30px] gap-[26px] bg-white rounded-lg shadow-lg">
        <div className="space-y-4 md:flex-1 ">
          <div>
            <p className="md:text-[20px] text-[18px] font-bold">
              Welcome to Alzaf.com
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[4px]">
              <label className="text-[#434343] text-[16px]" htmlFor="name">
                Full name
              </label>
              <input
                type="text"
                name=""
                id="name"
                className="border border-gray-300 p-2"
                placeholder="Enter you full name"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[#434343] text-[16px]" htmlFor="email">
                Phone Number or Email
              </label>
              <input
                type="text"
                name=""
                id="email"
                className="border border-gray-300 p-2"
                placeholder="Phone or Email"
                pattern="(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$)|(^\d{10}$)"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[#434343] text-[16px]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={visiblePassword ? "text" : "password"}
                  name=""
                  id="password"
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Please enter your password"
                />
                {visiblePassword ? (
                  <IoEyeOutline
                    onClick={() => setVisiblePassword(!visiblePassword)}
                    className="absolute right-2 top-1/2  cursor-pointer"
                    size={20}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setVisiblePassword(!visiblePassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2  cursor-pointer"
                    size={20}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label
                className="text-[#434343] text-[16px]"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div>
                <input
                  type="password"
                  name=""
                  id="confirmPassword"
                  className="border border-gray-300 p-2 w-full"
                  placeholder="Confirm password"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:flex-1 border border-black">
          <FaRegEyeSlash size={20} />
          <IoEyeOutline size={20} />
        </div>
      </form>
    </div>
  );
}
