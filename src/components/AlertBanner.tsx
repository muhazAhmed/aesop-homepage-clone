import React from "react";

const AlertBanner = () => {
  return (
    <div className="w-full relative z-[500] bg-subBanner text-[#333] min-h-[40px] flex items-start lg:items-center lg:justify-center py-[10px] px-[20px]">
      <p className="text-[14px] leading-5 lg:leading-6">
        Kindly note, due to the Christmas public holidays, the processing of
        orders may be delayed.
        <span className="ml-[6px] font-semibold cursor-pointer hover:border-b-[1px] hover:border-black">
          Conditions apply.
        </span>
      </p>
    </div>
  );
};

export default AlertBanner;
