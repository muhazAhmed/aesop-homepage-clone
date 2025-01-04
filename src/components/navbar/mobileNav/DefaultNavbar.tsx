import { mobileNavbarItems } from "@/lib/data";
import Image from "next/image";
import { HiBars2 } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";

const DefaultNavbar: React.FC<{
  toggleExpansion: () => void;
  isExpanded: boolean;
}> = ({ toggleExpansion, isExpanded }) => {
  return (
    <div className="w-full p-[5px] pt-0 flex items-center top-0 bg-transparent z-[1000] absolute">
      <div className="w-full flex items-center justify-between">
        <Image
          src={isExpanded ? "/logo.png" : "/nav-logo.png"}
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
          priority
        />

        <div className="flex gap-5 w-full items-center justify-end">
          {mobileNavbarItems?.map((item, index) =>
            item.isIcon ? (
              <button
                key={index}
                className={isExpanded ? "text-footerBlack" : "text-textPrimary"}
              >
                {item?.icon}
              </button>
            ) : (
              <button
                key={index}
                className={`text-sm ${
                  isExpanded ? "text-footerBlack" : "text-textPrimary"
                } font-medium`}
              >
                {item?.label}
              </button>
            )
          )}
        </div>

        <button
          className="font-bold pl-[27px]"
          onClick={toggleExpansion}
          aria-label="Expand navigation"
        >
          {isExpanded ? (
            <IoIosClose className="text-3xl text-black" />
          ) : (
            <HiBars2 className="text-textPrimary" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DefaultNavbar;
