import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'Service Providers',
    icon: '/assets/icons/service-providers.svg',
    link: '/catalog/services',
  },
  {
    id: 2,
    name: 'Job Opportunities',
    icon: '/assets/icons/job-opportunities.svg',
    link: '/catalog/jobs',
  },
  {
    id: 3,
    name: 'Materials',
    icon: '/assets/icons/materials.svg',
    link: '/catalog/materials',
  },
  {
    id: 4,
    name: 'Customized Service Request',
    icon: '/assets/icons/customized-service.svg',
    link: '/expert/private-expert',
  },
  {
    id: 5,
    name: 'Planned Maintenance',
    icon: '/assets/icons/planned-maintenance.svg',
    link: '/dashboard/planned-maintenance',
  },
];

const ServiceCategories = () => {
  return (
    <section className="px-4 md:px-8 py-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Service Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of service categories to find the perfect match for your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.id}
              className="flex flex-col items-center justify-center p-[30px_20px] rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 bg-white h-[180px] hover:border-[#4caf50] hover:text-[#4caf50]"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-[#e8f5e9] flex items-center justify-center mb-4">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={24}
                  height={24}
                  className="text-[#4caf50]"
                />
              </div>
              <h3 className="font-medium text-center text-gray-800">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
