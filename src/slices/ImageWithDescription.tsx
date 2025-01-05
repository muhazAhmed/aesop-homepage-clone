import React, { FC } from "react";
import { ImageWithDescriptionProps } from "@/lib/props";
import Button from "../components/atoms/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const ImageWithDescription: FC<ImageWithDescriptionProps> = ({
  ImagePosition = "right",
  data,
}) => {
  const isImageLeft = ImagePosition === "left";

  const renderMedia = () => {
    if (data?.videoUrl) {
      return (
        <video
          src={data.videoUrl}
          muted
          autoPlay
          loop
          className="lg:w-[58%] h-[57vh] lg:h-[75vh] object-cover mb-[30px] lg:mb-0"
        />
      );
    }
    if (data?.imgUrl) {
      return (
        <img
          src={data.imgUrl}
          alt="Hero content"
          className="lg:w-[58%] h-[57vh] lg:h-[75vh] object-cover mb-[30px] lg:mb-0"
        />
      );
    }
    return null;
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row justify-between py-[75px]">
      {isImageLeft && renderMedia()}

      <div
        className={`flex items-center justify-center flex-col lg:flex-row ${
          isImageLeft ? "lg:pr-[20px]" : "lg:pl-[150px]"
        } lg:w-[30vw] px-[20px] lg:px-0`}
      >
        <div className="flex flex-col items-start gap-5 h-full">
          <h5 className="leading-6 font-semibold text-sm">{data?.subTitle}</h5>
          <h1 className="text-[25px] lg:text-[30px] leading-10">
            {data?.title}
          </h1>
          <p className="leading-7 text-[16px] lg:w-[450px]">{data?.content}</p>
          <Button
            label={data?.buttonLabel}
            variant="secondary"
            className="w-[95%] lg:max-w-[300px] justify-between py-[25px] font-[600] text-[14px] mb-5 lg:mb-0"
            Icon={<IoIosArrowRoundForward className="text-2xl" />}
            iconPosition="right"
          />
        </div>
      </div>

      {!isImageLeft && renderMedia()}
    </div>
  );
};

export default ImageWithDescription;
