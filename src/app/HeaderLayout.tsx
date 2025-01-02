"use client";
import AlertBanner from "@/components/AlertBanner";
import CookieModal from "@/components/CookieModal";
import CustomerServiceModal from "@/components/CustomerServiceModal";
import Navbar from "@/components/navbar/Navbar";
import ShippingBanner from "@/components/ShippingBanner";
import { fetchIfCookieShowed, handleDismiss } from "@/lib/utils";
import { useEffect, useState } from "react";

const HeaderLayout = () => {
  const [cookieModal, setCookieModal] = useState<boolean>(false);

  useEffect(() => {
    fetchIfCookieShowed({ setCookieModal });
  }, []);
  return (
    <div className="relative w-full h-full">
      <CustomerServiceModal />
      {cookieModal && (
        <CookieModal setCookieModal={() => handleDismiss({ setCookieModal })} />
      )}
      <AlertBanner />
      <ShippingBanner />
      <Navbar />
    </div>
  );
};

export default HeaderLayout;
