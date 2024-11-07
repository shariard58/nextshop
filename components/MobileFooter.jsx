import { AiOutlineHome } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";
export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white block md:hidden z-10">
      <div className="flex justify-around py-4 border-t border-gray-300 shadow-md bg-orange-200 relative">
        <BsCart2 size={26} />
        <CiHeart size={26} />

        <div className="bg-orange-500 h-[50px] w-[50px] rounded-full flex items-center justify-center absolute top-[-16px] ">
          <CgMenuRound size={24} className="text-white" />
        </div>
        <MdOutlinePersonOutline size={26} />

        <AiOutlineHome size={26} />
      </div>
    </div>
  );
}
