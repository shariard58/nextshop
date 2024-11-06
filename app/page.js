"use client";
import Category from "@/components/Category";
import Header from "@/components/Header";
import SliderBanner from "@/components/SliderBanner";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <div>
        <SliderBanner />
      </div>

      <div className="absolute inset-y-0 mt-[100px]  md:grid md:grid-cols-12  w-full">
        <div className="md:col-span-2"></div>
        <div className="md:col-span-8 pl-4">
          <Category />
        </div>
        <div className="md:col-span-2"></div>
      </div>
    </div>
  );
}
