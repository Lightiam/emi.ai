import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PopularSection from "../Skeleton/PopularSection";

const ExpertHomeData = dynamic(
  () => import("../HomeComponents/ExpertHomeData"),
  {
    loading: () => <PopularSection />,
  }
);

const PopularExperts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-gray-900 font-bold max-md:text-xl">
            Services around you
          </h2>
          <Link
            href="/dashboard/expert"
            className="text-[#4caf50] hover:underline transition-all duration-300 text-sm font-medium"
          >
            See more
          </Link>
        </div>

        <ExpertHomeData />
      </div>
      <div className="flex justify-end mt-4 max-w-[1200px] mx-auto px-4">
        <Link href="/dashboard/expert" className="text-[#4caf50] hover:underline transition-all duration-300 text-sm font-medium">
          See more
        </Link>
      </div>
    </section>
  );
};

export default PopularExperts;
