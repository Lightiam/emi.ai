import React from "react";
import Link from "next/link";
import Image from "next/image";

const PopularJobs = () => {
  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: "Residential Plumbing Expert",
      company: "HomeFixers Ltd",
      location: "Lekki, Lagos",
      salary: "₦250,000 - ₦350,000",
      type: "Full-time",
      posted: "2 days ago",
      logo: "/assets/images/companies/company1.jpg",
    },
    {
      id: 2,
      title: "Senior Electrician",
      company: "PowerTech Solutions",
      location: "Ikeja, Lagos",
      salary: "₦300,000 - ₦400,000",
      type: "Contract",
      posted: "3 days ago",
      logo: "/assets/images/companies/company2.jpg",
    },
    {
      id: 3,
      title: "Construction Site Manager",
      company: "BuildRight Developers",
      location: "Victoria Island, Lagos",
      salary: "₦500,000 - ₦700,000",
      type: "Full-time",
      posted: "1 week ago",
      logo: "/assets/images/companies/company3.jpg",
    },
    {
      id: 4,
      title: "Interior Design Assistant",
      company: "SpaceCreators Interiors",
      location: "Yaba, Lagos",
      salary: "₦180,000 - ₦250,000",
      type: "Part-time",
      posted: "5 days ago",
      logo: "/assets/images/companies/company4.jpg",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-gray-900 font-bold max-md:text-xl">
            Popular Job Opportunities
          </h2>
          <Link
            href="/catalog/jobs"
            className="text-[#4caf50] hover:underline transition-all duration-300 text-sm font-medium"
          >
            See more
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Link
              href={`/job/${job.id}`}
              key={job.id}
              className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-md overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Logo</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{job.company} • {job.location}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {job.type}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {job.salary}
                    </span>
                    <span className="px-2 py-1 bg-[#e8f5e9] text-[#4caf50] text-xs rounded-full">
                      {job.posted}
                    </span>
                  </div>
                  <button className="px-4 py-2 border border-[#4caf50] text-[#4caf50] text-sm rounded-full hover:bg-[#4caf50] hover:text-white transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-4 max-w-[1200px] mx-auto px-4">
        <Link href="/catalog/jobs" className="text-[#4caf50] hover:underline transition-all duration-300 text-sm font-medium">
          See more
        </Link>
      </div>
    </section>
  );
};

export default PopularJobs;
