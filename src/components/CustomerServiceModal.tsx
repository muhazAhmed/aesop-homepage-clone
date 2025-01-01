import Image from "next/image";
import React from "react";

const CustomerServiceModal = () => {
  return (
    <Image
      className="absolute z-[600] bottom-4 right-5 cursor-pointer"
      src={"/live-chat.svg"}
      alt="live-chat"
      width={40}
      height={40}
      priority
    />
  );
};

export default CustomerServiceModal;
