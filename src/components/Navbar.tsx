import { navbarItems } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex px-[40px] items-center justify-between z-[1000] leading-relaxed">
      <div className="flex items-center gap-5 h-[80px]">
        {navbarItems?.map((item, index) =>
          item?.subItems ? null : (
            <button
              key={index}
              className="border-0 bg-transparent text-footerBlack font-[500] text-left text-[14px]"
              aria-label={item?.label || "Navbar button"}
            >
              {item?.isIcon ? (
                <Image
                  src="/global-search.png"
                  width={16}
                  height={16}
                  alt="Global Search"
                  priority
                />
              ) : (
                item?.label
              )}
            </button>
          )
        )}
      </div>

      <div className="flex items-center gap-5 h-[80px]">
        {navbarItems
          ?.find((item) => item?.subItems)
          ?.subItems?.map((subItem) => (
            <button
              key={subItem.id}
              className="border-0 bg-transparent text-footerBlack font-[500] text-right text-[14px]"
            >
              {subItem.label}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
