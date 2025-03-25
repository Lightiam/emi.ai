import React from "react";
import Link from "next/link";
import Image from "next/image";

import HeroSectionSearch from "../HomeComponents/HeroSectionSearch";

type Props = {
  currentLink: number;
};

const HeroSection = ({ currentLink }: Props) => {
  return (
    <section className="px-4 md:px-8 pt-24 pb-16 relative w-full bg-white">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="flex flex-col items-center justify-center relative py-16 bg-white border border-gray-100 rounded-lg shadow-sm">
          {/* Black artisan images positioned around the hero content */}
          <div className="absolute -left-16 top-0 w-[160px] h-[140px] hidden md:block">
            <Image 
              src="/assets/images/black-artisans/artisan1.png" 
              alt="Professional black artisan" 
              width={160} 
              height={140} 
              className="object-cover rounded-lg shadow-sm" 
            />
          </div>
          <div className="absolute -right-16 top-0 w-[160px] h-[140px] hidden md:block">
            <Image 
              src="/assets/images/black-artisans/artisan2.png" 
              alt="Professional black artisan" 
              width={160} 
              height={140} 
              className="object-cover rounded-lg shadow-sm" 
            />
          </div>
          <div className="absolute -left-16 bottom-0 w-[160px] h-[140px] hidden md:block">
            <Image 
              src="/assets/images/black-artisans/artisan3.png" 
              alt="Professional black artisan" 
              width={160} 
              height={140} 
              className="object-cover rounded-lg shadow-sm" 
            />
          </div>
          <div className="absolute -right-16 bottom-0 w-[160px] h-[140px] hidden md:block">
            <Image 
              src="/assets/images/black-artisans/artisan4.png" 
              alt="Professional black artisan" 
              width={160} 
              height={140} 
              className="object-cover rounded-lg shadow-sm" 
            />
          </div>
          <div className="absolute -right-16 bottom-1/3 w-[160px] h-[140px] hidden md:block">
            <Image 
              src="/assets/images/black-artisans/artisan5.png" 
              alt="Professional black artisan" 
              width={160} 
              height={140} 
              className="object-cover rounded-lg shadow-sm" 
            />
          </div>
          <div className="absolute -left-16 bottom-1/3 w-[160px] h-[140px] hidden md:block">
            <Image 
              src="/assets/images/black-artisans/artisan5.png" 
              alt="Professional black artisan" 
              width={160} 
              height={140} 
              className="object-cover rounded-lg shadow-sm" 
            />
          </div>
          
          {/* Central hero content */}
          <div className="max-w-[800px] mx-auto text-center relative z-10 px-4">
            <h1 className="font-extrabold text-[40px] text-gray-900 leading-tight mb-6">
              Discover Your Project Dream Team Here.
            </h1>
            <p className="text-gray-600 text-lg mb-10">
              This platform connects homeowners, contractors, businesses, and customers with skilled artisans, handymen, and project experts for renovations, custom-builds, and repairs.
            </p>
            
            {/* Navigation tabs */}
            <div className="mb-8">
              <ul className="flex items-center justify-center gap-12 border-b border-gray-200 pb-2">
                <li>
                  <Link
                    href="/catalog/services"
                    className="text-[#4caf50] border-b-2 border-[#4caf50] font-semibold hover:text-[#4caf50] transition-all duration-300 pb-2 px-2"
                  >
                    Hire Workers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalog/jobs"
                    className="text-gray-500 font-semibold hover:text-[#4caf50] transition-all duration-300 pb-2 px-2"
                  >
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalog/materials"
                    className="text-gray-500 font-semibold hover:text-[#4caf50] transition-all duration-300 pb-2 px-2"
                  >
                    Buy Materials
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Search component */}
            <HeroSectionSearch currentLink={currentLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
