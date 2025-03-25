import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Emilist</h3>
            <p className="text-gray-400 mb-4">
              Emilist connects homeowners, contractors, businesses, and customers with skilled artisans, handymen, and project experts.
            </p>
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-[40px] h-[40px] bg-[#4caf50] rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="font-semibold text-lg text-white">milist</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-400 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/materials" className="text-gray-400 hover:text-white transition-colors">
                  Materials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">For Experts</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/expert/register" className="text-gray-400 hover:text-white transition-colors">
                  Join as Expert
                </Link>
              </li>
              <li>
                <Link href="/expert/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Expert Dashboard
                </Link>
              </li>
              <li>
                <Link href="/expert/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/expert/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#4caf50] mr-2">Email:</span>
                <a href="mailto:info@emilist.com" className="text-gray-400 hover:text-white transition-colors">
                  info@emilist.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#4caf50] mr-2">Phone:</span>
                <a href="tel:+2348012345678" className="text-gray-400 hover:text-white transition-colors">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-[#4caf50] mr-2">Address:</span>
                <span className="text-gray-400">
                  123 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Emilist. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
