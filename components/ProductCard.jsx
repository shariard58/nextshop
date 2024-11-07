import Link from "next/link";
export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col transition-transform duration-300 ease-in-out hover:scale-105">
      <div
        className="bg-cover bg-center h-[240px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden mb-4"
        style={{
          backgroundImage: `url(${
            product?.imageUrl || "/products/product1.jpg"
          })`,
        }}
      />
      <h3 className="text-lg sm:text-xl font-semibold ">
        {product?.name ?? ""}
      </h3>
      <p className="text-gray-600 text-sm my-1">{product.description ?? ""}</p>
      <p className="text-[20px] font-bold mb-2">BDT : {product.price ?? ""}</p>

      <div className="flex justify-between mt-auto">
        <Link
          className="bg-[#FF8C00] rounded-lg py-2 px-3 sm:px-4 text-white text-sm font-semibold"
          href="#"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
