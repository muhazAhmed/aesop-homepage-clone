import { BorderBottomProp } from "@/lib/props";
import React, { FC } from "react";

const BorderBottom: FC<BorderBottomProp> = ({ bgColor = "bg-textPrimary" }) => {
  return (
    <span
      className={`absolute bottom-0 left-0 w-full h-[0.1px] ${bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
    ></span>
  );
};

export default BorderBottom;
