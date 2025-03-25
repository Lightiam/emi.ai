import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PopularMaterialsProps {
  bgColor?: string;
}

const PopularMaterials = ({ bgColor = "bg-white" }: PopularMaterialsProps) => {
  // Mock data for materials
  const materials = [
    {
      id: 1,
      name: "Premium Cement",
      image: "/assets/images/materials/cement.jpg",
      price: "₦4,500",
      rating: 4.8,
      reviews: 124,
      seller: "BuildRight Supplies",
    },
    {
      id: 2,
      name: "Ceramic Floor Tiles",
      image: "/assets/images/materials/tiles.jpg",
      price: "₦3,200/sqm",
      rating: 4.7,
      reviews: 98,
      seller: "TileWorld Nigeria",
    },
    {
      id: 3,
      name: "Electrical Wiring Kit",
      image: "/assets/images/materials/wiring.jpg",
      price: "₦12,500",
      rating: 4.9,
      reviews: 87,
      seller: "PowerTech Solutions",
    },
    {
      id: 4,
      name: "Paint Bundle (5L)",
      image: "/assets/images/materials/paint.jpg",
      price: "₦8,000",
      rating: 4.6,
      reviews: 56,
      seller: "ColorMaster Paints",
    },
  ];

  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-gray-900 font-bold max-md:text-xl">
            Popular Materials
          </h2>
          <Link
            href="/catalog/materials"
            className="text-[#4caf50] hover:underline transition-all duration-300 text-sm font-medium"
          >
            See more
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <Link
              href={`/material/${material.id}`}
              key={material.id}
              className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-40 mb-4 rounded-md overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Image</span>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{material.name}</h3>
                <p className="text-sm text-gray-500 mb-2">By {material.seller}</p>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill={i < Math.floor(material.rating) ? "currentColor" : "none"}
                        stroke="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-700">
                    {material.rating} ({material.reviews})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{material.price}</span>
                  <button className="px-3 py-1 bg-[#4caf50] text-white text-sm rounded-full hover:bg-[#3d8b40] transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4 max-w-[1200px] mx-auto px-4">
        <Link href="/catalog/materials" className="text-[#4caf50] hover:underline transition-all duration-300 text-sm font-medium">
          See more
        </Link>
      </div>
    </section>
  );
};

export default PopularMaterials;
