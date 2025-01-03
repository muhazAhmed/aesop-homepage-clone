import { ButtonProp } from "@/lib/props";
import React, { FC } from "react";

const Button: FC<ButtonProp> = ({
  label,
  className,
  disabled = false,
  Icon,
  iconClassName,
  iconPosition,
  onClick,
  variant = "primary",
  style,
}) => {
  return (
    <div
      className={`${className} btn-${variant} cursor-pointer flex items-center justify-center relative gap-4 py-[12px] w-full rounded-[2px]`}
      onClick={onClick}
      style={style}
    >
      {iconPosition === "left" && Icon && (
        <span className={`${iconClassName}`}>{Icon}</span>
      )}
      <button className="bottom-0 bg-transparent" disabled={disabled}>
        {label}
      </button>
      {iconPosition === "right" && Icon && (
        <span className={`${iconClassName}`}>{Icon}</span>
      )}
    </div>
  );
};

export default Button;
