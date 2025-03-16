import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="bg-gray-100 p-1.5  md:text-base">
      <ul className="flex text-sm font-semibold gap-1 opacity-50 flex-wrap justify-center md:justify-between px-4 md:px-[7vw]">
        <Link to="/about" className="hover:text-gray-900">
          About Us
        </Link>
        <li className="text-gray-400">|</li>
        <Link to="/history" className="hover:text-gray-800">
          Our History
        </Link>
        <li className="text-gray-400">|</li>
        <Link to="/customerservice" className="hover:text-gray-800">
          Customer Services
        </Link>
        <li className="text-gray-400">|</li>
        <Link to="/policy" className="hover:text-gray-800">
          Privacy Policy
        </Link>
      </ul>
    </div>
  );
}

export default TopNav;
