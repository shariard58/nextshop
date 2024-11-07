/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { months, yearArray } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
export default function page() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F0F0F0 px-4 ">
      <div className="w-full  sm:w-[80%] md:w-[60%]  lg:px-[74px] md:px-[60px]  lg:py-[40px] md:py-[36px] sm:py-[30px]  bg-white rounded-lg shadow-lg px-4">
        <form className="w-full flex flex-col  md:flex-row  lg:gap-[44px] md:gap-[30px] gap-[26px]  sm:mt-4 md:mt-0">
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
                <label
                  className="text-[#434343] text-[16px]"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={visiblePassword ? "text" : "password"}
                    id="password"
                    className="border border-gray-300 p-2 w-full pr-10"
                    placeholder="Please enter your password"
                  />
                  {visiblePassword ? (
                    <IoEyeOutline
                      onClick={() => setVisiblePassword(!visiblePassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      size={20}
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => setVisiblePassword(!visiblePassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
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
                <div className="relative">
                  <input
                    type={visibleConfirmPassword ? "text" : "password"}
                    name=""
                    id="confirmPassword"
                    className="border border-gray-300 p-2 w-full"
                    placeholder="Confirm password"
                  />

                  {visibleConfirmPassword ? (
                    <IoEyeOutline
                      onClick={() =>
                        setVisibleConfirmPassword(!visibleConfirmPassword)
                      }
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      size={20}
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() =>
                        setVisibleConfirmPassword(!visibleConfirmPassword)
                      }
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      size={20}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:flex-1 gap-[10px]">
            <p className="text-[18px] md:text-[20px] text-[#F97316] font-bold md:text-end  text-left">
              Login
            </p>

            <div className="w-full grid grid-cols-4  gap-[4px]">
              <div className="col-span-3">
                <p className="text-[14px] text-[#434343] mb-[8px]">Birthday</p>
                <div className="flex gap-[4px] grid grid-cols-3">
                  <select
                    name="month"
                    id="month"
                    className="p-2 border rounded border-[#DFDFDF] col-span-1"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Month
                    </option>

                    {months?.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="day"
                    id="day"
                    className="p-2 border rounded border-[ #DFDFDF] col-span-1"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="year"
                    id="year"
                    className="p-2 border rounded border-[ #DFDFDF] col-span-1"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {yearArray.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-1 ">
                <p className="text-[#434343] mb-[6px]">Gender</p>
                <select
                  className="p-2 border rounded border-[ #DFDFDF]"
                  name="gender"
                  id="gender"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male" disabled>
                    Male
                  </option>
                  <option value="female" disabled>
                    Femal
                  </option>
                </select>
              </div>
            </div>

            <button className="w-full border-none outline-none bg-[#F97316] transition duration-200 ease-in-out hover:bg-orange-400">
              <p className="text-white text-[16px] font-medium p-[16px]">
                Sign Up
              </p>
            </button>
            <p className="text-center text-[16px] font-medium text-[#707070]">
              Or
            </p>

            <button className="w-full  outline-none border-[2px] border-[#F97316] transition duration-200 ease-in-out  flex items-center justify-center space-x-[0px]">
              <Image
                src="/images/facebook.png"
                alt="fb"
                height={32}
                width={32}
              />
              <p className="text-[16px] font-medium p-[16px]">
                Sign Up with Facebook
              </p>
            </button>

            <button className="w-full  outline-none border-[2px] border-[#F97316] transition duration-200 ease-in-out  flex items-center justify-center space-x-[0px]">
              <Image src="/images/google.png" alt="fb" height={32} width={32} />
              <p className="text-[16px] font-medium p-[16px]">
                Sign Up with Google
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
