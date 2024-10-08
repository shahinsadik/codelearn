import React from "react";

const BusinessSection = () => {
  return (
    <div className="bg-purple-600 my-12 py-12 px-6 rounded-lg text-center container mx-auto ">
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Let’s work together to  grow <br />your business
      </h2>

      {/* Subheading Text */}
      <p className="text-white opacity-75 mb-8">
        here are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration
      </p>

      {/* Input and Button Wrapper */}
      <div className="flex justify-center items-center space-x-2">
        {/* Input Field */}
        <input
          type="email"
          placeholder="Enter your email address"
          className="py-2 px-4 rounded-full border-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-white w-64"
        />
        {/* Button */}
        <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default BusinessSection;
