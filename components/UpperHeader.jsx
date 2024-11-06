import { IoIosArrowUp } from "react-icons/io";
export default function UpperHeader() {
  return (
    <div className="grid md:grid-cols-12 gap-[0px] bg-[#F0F1F1] py-[6px]">
      <div className="col-span-2"></div>
      <div className="md:col-span-8 md:grid md:grid-cols-8  gap-[20px] cursor-pointer">
        <div className="md:col-span-5  w-full flex gap-[28px]">
          <div className="flex gap-[4px]">
            <p className="text-[12px] text-[#F97316]">English</p>
            <IoIosArrowUp color="orange" size={16} />
          </div>
          <p className="text-[12px] text-[#434343]">Help Center</p>
          <p className="text-[12px] text-[#434343]">Helpline: 0964781656</p>
        </div>

        <div className="md:col-span-3  w-full">
          <div className="w-[80vh]  flex gap-[22px] ">
            <p className="text-[12px] text-[#434343]">Help Center</p>
            <p className="text-[12px] text-[#434343]">Helpline: 0964781656</p>
            <div className="flex justify-start items-start gap-[4px]">
              <p className="text-[12px] text-[#F97316]">sign up</p>
              <p className="text-[12px] text-[#F97316]">/</p>
              <p className="text-[12px] text-[#F97316]">Login</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2"></div>
    </div>
  );
}
