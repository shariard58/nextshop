import { productsData } from "@/utils/data";
import ProductCard from "./ProductCard";
export default function PopularProducts() {
  return (
    <div className="p-8">
      <p className="text-[20px] font-bold inline-block border-b border-orange-400 pb-[6px] border-b-[2px]">
        Popular Products :
      </p>

      <div className="mt-[20px] grid grid-cols-4 gap-[20px]">
        {productsData &&
          productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
