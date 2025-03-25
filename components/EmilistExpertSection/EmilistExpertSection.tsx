import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmilistExpertSection = () => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Become an Emilist Expert
              </h2>
              <p className="text-gray-600 mb-6">
                Join our community of skilled professionals and grow your business. Get connected with clients looking for your expertise and services.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#e8f5e9] flex items-center justify-center mt-1 mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Create your professional profile</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#e8f5e9] flex items-center justify-center mt-1 mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Showcase your skills and experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#e8f5e9] flex items-center justify-center mt-1 mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Set your own rates and availability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#e8f5e9] flex items-center justify-center mt-1 mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Connect with clients in your area</span>
                </li>
              </ul>
              <Link
                href="/expert/register"
                className="inline-block px-6 py-3 bg-[#4caf50] text-white rounded-full hover:bg-[#3d8b40] transition-colors font-medium"
              >
                Join as Expert
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Expert Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmilistExpertSection;
