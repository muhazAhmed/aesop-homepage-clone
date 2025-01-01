import React from "react";
import { FiPlus } from "react-icons/fi";
import BorderBottom from "./atoms/BorderBottom";

const ShippingBanner = () => {
  return (
    <div className="w-full relative z-[500] bg-footerBlack text-textPrimary min-h-[40px] flex items-start lg:items-center lg:justify-center py-[10px] px-[20px]">
      <p className="text-[14px] leading-5 lg:leading-6 cursor-pointer flex items-center relative group">
        Enjoy complimentary shipping on orders over $400. Click and Collect is
        now available in Hong Kong.
        <FiPlus className="ml-[20px] font-semibold" />
        <BorderBottom />
      </p>
    </div>
  );
};

export default ShippingBanner;
