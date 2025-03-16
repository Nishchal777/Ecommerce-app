import React from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-200">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-10 text-sm pl-10 pt-5">
        <div>
          <img src={logo} className="mb-5 w-40" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            repellendus sunt ex amet aliquid, rem molestiae praesentium beatae
            blanditiis fugit est similique doloremque adipisci quidem! Fugiat
            labore ad placeat autem.
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium mb-2">Company</p>
          <ul className="flex flex-col gap-1 p-1 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/history">our History</Link>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link>+9779800000000</Link>
            <Link>nischal@nepal.com</Link>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2025 @ nischal@nepal.com - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
