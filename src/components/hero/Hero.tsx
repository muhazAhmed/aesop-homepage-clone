import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { heroPaginationItems } from "@/lib/data";
import { motion } from "framer-motion";
import Pagination from "./HeroPagination";

const Hero = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentPage((prev) =>
      prev < heroPaginationItems.length ? prev + 1 : 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prev) =>
      prev > 1 ? prev - 1 : heroPaginationItems.length
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (isPlaying) {
      if (!heroPaginationItems[currentPage - 1]?.isVideo) {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
      }
    }
  }, [isPlaying, currentPage]);

  const renderPagination = () => {
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={heroPaginationItems.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      />
    );
  };

  return (
    <div className="w-full">
      <div className="w-full h-[100%] lg:h-[90vh] flex flex-col bg-heroBanner text-[#333333]">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col-reverse lg:flex-row items-start justify-between"
        >
          <div className="hidden lg:block relative w-[28%] h-full">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={100}
              height={100}
              className="absolute top-[110px] left-[40px]"
            />
          </div>
          <div className="relative pl-[20px] lg:pl-0 lg:w-[72%] flex items-center flex-col lg:flex-row">
            <div className="flex flex-col items-start gap-5 h-full lg:absolute top-[110px] left-[40px]">
              <h5 className="leading-6 font-semibold text-sm">
                {heroPaginationItems[currentPage - 1]?.subTitle || ""}
              </h5>
              <h1 className="text-[30px] leading-10">
                {heroPaginationItems[currentPage - 1]?.title}
              </h1>
              <p className="leading-7 text-[16px] lg:w-[425px]">
                {heroPaginationItems[currentPage - 1]?.content}
              </p>
              <Button
                label={heroPaginationItems[currentPage - 1]?.buttonLabel || ""}
                variant="secondary"
                className="w-[93%] lg:max-w-[300px] justify-between py-[25px] font-[600] text-[14px]"
                Icon={<IoIosArrowRoundForward className="text-2xl" />}
                iconPosition="right"
              />
            </div>
          </div>

          <div className="w-full">
            {heroPaginationItems[currentPage - 1]?.isVideo ? (
              <video
                src={heroPaginationItems[currentPage - 1]?.videoUrl}
                className="h-[57vh] lg:h-[90vh] object-cover"
                autoPlay
                muted
                onEnded={handleNext}
              />
            ) : (
              <img
                src={heroPaginationItems[currentPage - 1]?.imageUrl}
                alt="Hero content"
                className="w-full h-[57vh] lg:h-[90vh] object-cover"
              />
            )}
            <div className="lg:hidden py-[15px]">{renderPagination()}</div>
          </div>
        </motion.div>
      </div>
      <div className="py-[15px] w-full hidden lg:block">
        {renderPagination()}
      </div>
    </div>
  );
};

export default Hero;
