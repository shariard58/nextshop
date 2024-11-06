import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
export default function LowerHeader() {
  return (
    <div className="grid md:grid-cols-12 gap-[0px] py-[12px]">
      <div className="md:col-span-2"></div>
      <div className="md:col-span-8 grid md:grid-cols-8   gap-[10px]">
        <div className="md:col-span-1  flex  items-center">
          <Image src="/images/logo.jpg" alt="logo" width={120} height={130} />
        </div>
        <div className="md:col-span-4 border border-[#EFF0F5] bg-[#EFF0F5]  relative rounded-xl overflow-hidden">
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

        <div className="md:col-span-3  flex items-center px-2 gap-[16px]">
          <div className="p-2 bg-[#F5F5F5] rounded-md">
            <MdOutlinePersonOutline size={22} />
          </div>
          <div className="p-2 bg-[#F5F5F5] rounded-md">
            <CiHeart size={22} />
          </div>
          <div className="p-2 bg-[#F5F5F5] rounded-md">
            <BsCart2 size={22} />
          </div>
          <div className="relative ">
            <Image
              className="absolute inset-y-0 left-0 "
              src="/images/rightIcon.png"
              alt="cloud"
              width={40}
              height={82}
            />

            <div className="h-[40px] w-[120px] flex items-center bg-[#F97316] p-[10px] z-1 rounded-md mx-8">
              <Image
                src="/images/cloud.png"
                alt="cloud"
                width={90}
                height={80}
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2"></div>
    </div>
  );
}
