import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
export default function LowerHeader() {
  return (
    <div className="grid md:grid-cols-5 gap-[0px] py-[12px]">
      <div className="md:col-span-1"></div>
      <div className="md:col-span-3 grid md:grid-cols-7 md:gap-[28px]">
        <div className="md:col-span-1 border border-black flex justify-center items-center">
          <Image src="/images/logo.jpg" alt="logo" width={100} height={130} />
        </div>
        <div className="md:col-span-4 border border-[#EFF0F5] bg-[#EFF0F5]  relative rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Search Product"
            className="bg-[#EFF0F5] w-[90%] border-none outline-none focus:outline-none focus:border-none py-[8px] ml-[14px]  pr-[60px]"
          />
          <div className="absolute inset-y-0 right-0 bg-[#F97316] bg-orange px-4 flex items-center rounded-xl ">
            <IoSearchOutline color="white" size={20} />
          </div>
        </div>

        <div className="md:col-span-1  flex justify-center items-center">
          <div className="flex gap-[10px]">
            <div className="p-2 bg-[#F5F5F5] rounded-md">
              <MdOutlinePersonOutline size={22} />
            </div>
            <div className="p-2 bg-[#F5F5F5] rounded-md">
              <CiHeart size={22} />
            </div>
            <div className="p-2 bg-[#F5F5F5] rounded-md">
              <BsCart2 size={22} />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 border border-black">img</div>
      </div>
      <div className="md:col-span-1"></div>
    </div>
  );
}
