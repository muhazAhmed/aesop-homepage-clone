import AlertBanner from "@/components/AlertBanner";
import CustomerServiceModal from "@/components/CustomerServiceModal";
import ShippingBanner from "@/components/ShippingBanner";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <CustomerServiceModal />
      <AlertBanner />
      <ShippingBanner />
    </div>
  );
}
