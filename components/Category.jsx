import { AiOutlineProduct } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Category() {
  const demoCategory = [
    {
      id: 1,
      title: "Women's & Girls Fashion",
      parent_id: null,
      category_id: 14,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Women-&-Girls-Fashion.svg",
      link: "/womens-girls-fashion",
    },
    {
      id: 2,
      title: "Health & Beauty",
      parent_id: null,
      category_id: 16,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Health-&-Beauty.svg",
      link: "/health-beauty",
    },
    {
      id: 3,
      title: "Watches, Bags, Jewellery",
      parent_id: null,
      category_id: 10,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/Watches-Bags-jewellery.svg",
      link: "/watches-bags-jewellery",
      childrens: [
        {
          id: 15,
          title: "kids bags",
          parent_id: 3,
          category_id: 1,
          image: null,
          link: "/watches-bags-jewellery/kids-bags",
          childrens: [
            {
              id: 19,
              title: "Bags ABC",
              parent_id: 15,
              category_id: 16,
              image: null,
              link: "/watches-bags-jewellery/kids-bags/bags-abc",
            },
          ],
        },
        {
          id: 16,
          title: " ravel Bags",
          parent_id: 3,
          category_id: 15,
          image: null,
          link: "/watches-bags-jewellery/ravel-bags",
          childrens: [
            {
              id: 17,
              title: "Children Bags",
              parent_id: 16,
              category_id: 16,
              image: null,
              link: "/watches-bags-jewellery/ravel-bags/children-bags",
              childrens: [
                {
                  id: 18,
                  title: "Bags 123",
                  parent_id: 17,
                  category_id: 16,
                  image: null,
                  link: "/watches-bags-jewellery/ravel-bags/children-bags/bags-123",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Mens & Boys Fashion",
      parent_id: null,
      category_id: 5,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/mens-boys-fashion.svg",
      link: "/mens-boys-fashion",
    },
    {
      id: 5,
      title: "Mother & Baby",
      parent_id: null,
      category_id: 4,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/mother-baby.svg",
      link: "/mother-baby",
    },
    {
      id: 6,
      title: "Electronics Devices",
      parent_id: null,
      category_id: 10,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/electronics.svg",
      link: "/electronics-devices",
    },
    {
      id: 7,
      title: "TV & Home Appliances",
      parent_id: null,
      category_id: 16,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/tv-home.svg",
      link: "/tv-home-appliances",
    },
    {
      id: 8,
      title: "Electronic Accessories",
      parent_id: null,
      category_id: 10,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/electronic-acces.svg",
      link: "/electronic-accessories",
    },
    {
      id: 9,
      title: "Groceries",
      parent_id: null,
      category_id: 2,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/grocery.svg",
      link: "/groceries",
    },
    {
      id: 10,
      title: "Home & Lifestyle",
      parent_id: null,
      category_id: 9,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/home-lifestyle.svg",
      link: "/home-lifestyle",
    },
    {
      id: 11,
      title: "Sports & Outdoors",
      parent_id: null,
      category_id: 15,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/sports.svg",
      link: "/sports-outdoors",
    },
    {
      id: 12,
      title: "Automobile",
      parent_id: null,
      category_id: 7,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/auto-mobile.svg",
      link: "/automobile",
    },
    {
      id: 13,
      title: "Computer and laptop",
      parent_id: null,
      category_id: 6,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/computer-laptop.svg",
      link: "/computer-and-laptop",
    },
    {
      id: 14,
      title: "Pet Supplies",
      parent_id: null,
      category_id: 15,
      icon: "https://shope.sgp1.cdn.digitaloceanspaces.com/images/hero-categories/icons/pet-supplier.svg",
      link: "/pet-supplies",
    },
  ];
  return (
    <div className="relative group">
      <button className="mt-4 py-2 px-6 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-200">
        Category
      </button>

      {demoCategory && demoCategory.length > 0 && (
        <div className="bg-white shadow-md py-2 px-2 absolute top-0 left-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100 rounded-sm mt-[-2.5px] sm:w-[180px] md:w-[240px] lg:w-[270px]">
          {demoCategory.map((category) => (
            <div key={category?.id} className="py-[4px] relative  ">
              <div className="flex justify-between items-center">
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

              {category.childrens && category?.childrens.length > 0 && (
                <div className="absolute left-full top-full  ml-[8px] bg-white shadow-md rounded-sm w-[200px] md:h-[500px]">
                  Duke
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
