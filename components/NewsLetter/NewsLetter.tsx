import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest news, job opportunities, and expert tips from Emilist.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 px-4 rounded-md border border-gray-200 focus:outline-none focus:border-[#4caf50] focus:ring-1 focus:ring-[#4caf50]"
                required
              />
              <button
                type="submit"
                className="h-12 px-6 bg-[#4caf50] text-white rounded-md hover:bg-[#3d8b40] transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Emilist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
