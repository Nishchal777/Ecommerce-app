import React from "react";
import e_icon from "../assets/exchange_icon.png";
import q_icon from "../assets/quality_icon.png";
import s_icon from "../assets/support_img.png";

const OurPolicy = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md-text-base text-gray-700">
      <div>
        <img src={e_icon} alt="logo" className=" w-12 m-auto mb-5 " />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-500">We offer easy and free exchange policy.</p>
      </div>
      <div>
        <img src={q_icon} alt="logo" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">7 Daya Return Policy</p>
        <p className="text-gray-500">We Provide 7 Day Free Return policy</p>
      </div>
      <div>
        <img src={s_icon} alt="logo" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Best Customer Services</p>
        <p className="text-gray-5 00">We Offer 24/7 Customer Support.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
