"use client";
export default function page() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border border-black sm:w-[90%] md:w-[80%] flex flex-col md:flex-row">
        <div className="flex-1 p-4">Part One</div>
        <div className="flex-1 p-4">Part two</div>
      </div>
    </div>
  );
}
