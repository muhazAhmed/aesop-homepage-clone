import React from "react";
import Button from "./atoms/Button";

const CookieModal = ({ setCookieModal }: { setCookieModal: () => void }) => {
  return (
    <div className="bg-blur">
      <div className="bg-textPrimary px-[35px] w-[98%] absolute bottom-0 lg:static lg:max-w-[395px] lg:w-[395px] flex flex-col items-start justify-center gap-3">
        <h2 className="mt-[32px] text-[24px] leading-snug">
          A note on privacy
        </h2>
        <p className="leading-5 text-[14px]">
          By choosing &apos;Accept all cookies&apos;, you agree to the storing
          of cookies on your device to enhance site navigation, analyse site
          usage, and assist in our marketing efforts.
          <a className="ml-[5px] border-b-[1px] border-black hover:border-0 cursor-pointer">
            View cookies policy
          </a>
        </p>
        <div className="flex flex-col gap-3 items-center justify-center w-full py-[15px] pb-[39px]">
          <Button
            label="Accept all cookies"
            className="h-[60px] w-[335px] font-semibold"
            onClick={setCookieModal}
          />
          <Button
            label="Reject all"
            className="h-[60px] w-[335px] font-semibold"
            onClick={setCookieModal}
          />
          <Button
            label="Cookie settings"
            className="h-[60px] w-[335px] font-semibold"
            onClick={setCookieModal}
          />
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
