import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
export default function MobileHeader() {
  return (
    <div className="block md:hidden px-[8px] py-[12px] flex flex-col w-full border border-black w-[90vh]">
      <div className="flex p-2 justify-between ">
        <Image src="/images/logo.jpg" alt="logo" width={100} height={120} />
        <GiHamburgerMenu size={20} />

        {/* <RxCross2 /> */}
      </div>
    </div>
  );
}
