import { mobileNavbarItems } from "@/lib/data";
import Image from "next/image";
import { HiBars2 } from "react-icons/hi2";

const DefaultNavbar: React.FC<{ toggleExpansion: () => void }> = ({
  toggleExpansion,
}) => {
  return (
    <div className="w-full p-[20px] flex items-center sticky top-0 bg-transparent z-[1000]">
      <div className="w-full flex items-center justify-between mt-[10px]">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer w-auto"
          priority
        />

        <div className="flex gap-8 w-full items-center justify-end">
          {mobileNavbarItems?.map((item, index) =>
            item.isIcon ? (
              <Image
                className="cursor-pointer"
                src={item.icon}
                alt={item.alt || "icon"}
                width={20}
                height={20}
                key={index}
                priority
              />
            ) : (
              <button
                key={index}
                className="text-sm text-footerBlack font-medium"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        <button
          className="text-lg pl-[30px]"
          onClick={toggleExpansion}
          aria-label="Expand navigation"
        >
          <HiBars2 />
        </button>
      </div>
    </div>
  );
};

export default DefaultNavbar;