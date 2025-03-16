import React from "react";

const Newsletter = () => {
  return (
    <div className="text-center">
      <div className="text-3xl font-medium text-gray-800">
        <span className="text-red-600">Subscribe Now</span> & Get 20% off
      </div>
      <p className="text-gray-400 mt-3">
        Join 15,000+ subscribers and get a new discount code on every purchase.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-wrap items-center w-full max-w-lg mx-auto my-6 border-2 rounded-lg overflow-hidden"
      >
        {/* Input Field */}
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-1 w-full px-4 py-3 outline-none text-gray-700 border-none sm:w-auto"
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="bg-red-600 text-white px-3 py-3 text-[7px] sm:text-base  font-medium hover:bg-red-800 transition-all sm:rounded-tr-lg sm:rounded-br-lg"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
