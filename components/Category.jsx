"use client";
import { useEffect, useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Category() {
  const [showCategories, setShowCategories] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategories, setHoveredSubCategories] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllDatas = async () => {
      try {
        const response = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        const apiData = await response.json();
        setData(apiData);
      } catch (err) {
        console.error("Failed to fetch data");
      }
    };

    fetchAllDatas();
  }, []);

  // functoin for showing category
  const handleShowCategory = () => {
    setShowCategories(true);
    console.log(showCategories);
  };

  // function for hiding category
  const handleHideCategory = () => {
    setShowCategories(false);
  };

  const handleHoverCategory = (category) => {
    setHoveredCategory(category);
  };
  // while leaving the middle div
  const handleLeaveSubCategoryDiv = () => {
    setHoveredCategory(null);
  };
  // strogin the subcategory value for sub sub category
  const handleHoverSubCategory = (subCategory) => {
    setHoveredSubCategories(subCategory);
  };

  const handleLeaveSubSubCategory = () => {
    setHoveredSubCategories(null);
  };

  return (
    <div className="relative ">
      <button
        onMouseEnter={handleShowCategory}
        className="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200"
      >
        Show Categories
      </button>

      {showCategories && data && data.length > 0 && (
        <div
          onMouseLeave={handleHideCategory}
          className="flex absolute top-0 left-0 transition-opacity duration-200 mt-[-2.5px]"
        >
          <div
            onMouseEnter={() => handleShowCategory()}
            className="bg-white shadow-md sm:w-[180px] md:w-[240px] lg:w-[270px] py-2 px-[2px] "
          >
            <div className="border-r-[2px] border-r-gray-300">
              {data.map((category) => (
                <div key={category?.id} className="py-[4px] relative">
                  <div
                    onMouseEnter={() => handleHoverCategory(category)}
                    className="flex justify-between items-center"
                  >
                    <AiOutlineProduct size={20} />

                    <p className="text-[16px] cursor-pointer hover:text-orange-400 hover:font-bold flex-grow text-start ml-2">
                      {category.title}
                    </p>

                    {category.childrens && category?.childrens.length > 0 && (
                      <MdKeyboardArrowRight
                        className="cursor-pointer"
                        color="orange"
                        size={20}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {hoveredCategory?.childrens &&
            hoveredCategory?.childrens.length > 0 && (
              <>
                <div
                  onMouseLeave={() => setHoveredSubCategories(null)}
                  className="bg-white shadow-md sm:w-[180px] md:w-[240px] lg:w-[270px] py-2 px-[2px] border-r-gray-300 border-r-[2px]"
                >
                  {hoveredCategory.childrens.map((subCategory, index) => (
                    <div key={index}>
                      <div
                        onMouseEnter={() => handleHoverSubCategory(subCategory)}
                        className="flex justify-between items-center py-[4px]"
                      >
                        <p className="text-[16px] cursor-pointer hover:text-orange-400 hover:font-bold flex-grow text-start ml-2">
                          {subCategory.title ?? ""}
                        </p>
                        {subCategory?.childrens &&
                          subCategory?.childrens.length > 0 && (
                            <MdKeyboardArrowRight
                              className="cursor-pointer"
                              color="orange"
                              size={20}
                            />
                          )}
                      </div>
                    </div>
                  ))}
                </div>

                {hoveredSubCategories?.childrens &&
                  hoveredSubCategories?.childrens.length > 0 && (
                    <div
                      onMouseLeave={handleLeaveSubSubCategory}
                      className="bg-white shadow-md sm:w-[180px] md:w-[240px] lg:w-[270px] py-2 px-[2px]"
                    >
                      {hoveredSubCategories.childrens.map(
                        (subSubCategory, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center py-[4px]">
                              <p className="text-[16px] cursor-pointer hover:text-orange-400 hover:font-bold flex-grow text-start ml-2">
                                {subSubCategory.title ?? ""}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
              </>
            )}
        </div>
      )}
    </div>
  );
}
