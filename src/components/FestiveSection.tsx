import React from "react";
import Button from "./atoms/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const FestiveSection = () => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row justify-between pt-[150px]">
      <img
        src="/festiveGiftBox.jpg"
        alt="Hero content"
        className="lg:w-[58%] h-[57vh] lg:h-[75vh] object-cover mb-[30px] lg:mb-0"
      />
      <div className="flex items-center justify-center flex-col lg:flex-row lg:w-[30vw] px-[20px] lg:px-0">
        <div className="flex flex-col items-start gap-5 h-full">
          <h5 className="leading-6 font-semibold text-sm">Festive giving</h5>
          <h1 className="text-[25px] lg:text-[30px] leading-10">
            A complimentary sleeve for your gifts
          </h1>
          <p className="leading-7 text-[16px] lg:w-[450px]">
            Inspired by the verve of the season, a specially designed gift
            sleeve will swaddle your purchases when you select the ‘gift
            packaging’ option at checkout. Exclusions apply.
          </p>
          <Button
            label={"Explore gifts"}
            variant="secondary"
            className="w-[95%] lg:max-w-[300px] justify-between py-[25px] font-[600] text-[14px] mb-5 lg:mb-0"
            Icon={<IoIosArrowRoundForward className="text-2xl" />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default FestiveSection;
