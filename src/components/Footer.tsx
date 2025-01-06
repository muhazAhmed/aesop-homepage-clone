import { footerItems } from "@/lib/data";
import ListSection from "@/slices/ListSection";

const Footer = () => {
  return (
    <footer className="bg-footerBlack text-textPrimary pt-[50px] lg:px-[30px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 px-4">
        <div className="col-span-2">
          <h3 className="border-b border-textPrimary text-lg font-semibold mb-4 pb-4">
            Subscribe to Aesop communications
          </h3>
          <div className="pb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border border-textPrimary outline-none mb-4 p-2 text-lg placeholder-white"
            />
            <label className="flex items-center justify-center text-sm">
              <input type="checkbox" className="mr-2" />
              <div>
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our{" "}
                <span className="underline cursor-pointer">privacy policy</span>
                .
              </div>
            </label>
          </div>
        </div>

        {footerItems.map((section, index) => (
          <ListSection
            key={index}
            title={section.title}
            items={section.items}
            isText={section.isText}
            content={section.content}
            learnMoreHref={section.learnMoreHref}
            className={section.title === "Sustainability" ? "col-span-2" : ""}
          />
        ))}
      </div>

      <div className="border-t-2 border-textPrimary px-[40px] h-[72px] flex items-center mt-[50px]">
        <span className="text-[#fffef2] text-[16px] leading-4">© Aesop</span>
      </div>
    </footer>
  );
};

export default Footer;
