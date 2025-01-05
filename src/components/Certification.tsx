import { certificationData } from "@/lib/data";
import React from "react";

const Certification = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-[#F6F5E8] py-[80px] lg:py-0 gap-10 lg:gap-0">
      {certificationData?.map((item) => (
        <div
          className="w-full flex lg:items-center justify-center flex-col gap-3 lg:py-[80px] px-[10px] lg:px-[50px]"
          key={item?.id}
        >
          <h3 className="leading-5 font-semibold text-[14px]">{item?.title}</h3>
          <h5 className="leading-5 font-extralight text-[#666666] text-[14px] lg:text-center">
            {item?.content}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Certification;
