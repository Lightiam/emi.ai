import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExpertHomeData = () => {
  // Mock data for experts
  const experts = [
    {
      id: 1,
      name: "John Adebayo",
      title: "Plumbing Expert",
      image: "/assets/images/black-artisans/artisan1.jpg",
      rating: 4.8,
      reviews: 124,
      location: "Lekki, Lagos",
      price: "₦5,000/hr",
    },
    {
      id: 2,
      name: "Chioma Okafor",
      title: "Electrical Engineer",
      image: "/assets/images/black-artisans/artisan2.jpg",
      rating: 4.9,
      reviews: 98,
      location: "Ikeja, Lagos",
      price: "₦6,500/hr",
    },
    {
      id: 3,
      name: "Mohammed Ibrahim",
      title: "Carpenter & Joiner",
      image: "/assets/images/black-artisans/artisan3.jpg",
      rating: 4.7,
      reviews: 87,
      location: "Yaba, Lagos",
      price: "₦4,800/hr",
    },
    {
      id: 4,
      name: "Amina Bello",
      title: "Interior Designer",
      image: "/assets/images/black-artisans/artisan4.jpg",
      rating: 5.0,
      reviews: 56,
      location: "Victoria Island, Lagos",
      price: "₦8,000/hr",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {experts.map((expert) => (
        <Link
          href={`/expert/${expert.id}`}
          key={expert.id}
          className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <Image
                src={expert.image}
                alt={expert.name}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{expert.name}</h3>
              <p className="text-sm text-gray-500">{expert.title}</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <div className="flex text-yellow-400 mr-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill={i < Math.floor(expert.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-700">
                {expert.rating} ({expert.reviews} reviews)
              </span>
            </div>
            <p className="text-sm text-gray-600">{expert.location}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">{expert.price}</span>
            <button className="px-3 py-1 bg-[#4caf50] text-white text-sm rounded-full hover:bg-[#3d8b40] transition-colors">
              Hire
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ExpertHomeData;
