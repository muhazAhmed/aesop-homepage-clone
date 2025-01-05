import { aromaSection } from "@/lib/data";
import React from "react";

const AromaSection = () => {
  return (
    <div className="w-full flex items-center  flex-col lg:flex-row justify-between px-[20px] lg:px-[80px] py-[75px] gap-14 lg:gap-5">
      {aromaSection?.map((item) => (
        <div className="w-full flex flex-col items-start gap-5" key={item?.id}>
          {item?.imgUrl && (
            <img
              src={item?.imgUrl}
              alt="Image"
              className="w-full mb-5 cursor-pointer scale-y-125 lg:scale-y-100"
            />
          )}
          {item?.videoUrl && (
            <video
              src={item?.videoUrl}
              muted
              autoPlay
              loop
              className="w-full object-cover mb-3 cursor-pointer"
            />
          )}
          <button className="text-[16px] leading-6 text-[#333333] border-b-[1px] border-transparent hover:border-[#333333]">
            {item?.title}
          </button>
          <p className="text-[14px] leading-4 cursor-pointer text-[#333333]">
            {item?.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AromaSection;
