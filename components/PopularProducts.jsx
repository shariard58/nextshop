import { productsData } from "@/utils/data";
import ProductCard from "./ProductCard";
export default function PopularProducts() {
  return (
    <div className="p-8 mb-[40px]">
      <p className="text-[24px] font-semibold text-gray-900 inline-block border-b-4 border-orange-500 pb-2 mr-4">
        Popular Products
      </p>
      <div className="mt-[20px] grid grid-cols-1 md:grid-cols-4 md:gap-[20px] gap-[14px]">
        {productsData &&
          productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
