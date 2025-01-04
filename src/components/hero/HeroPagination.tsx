import { PaginationProps } from "@/lib/props";
import { FC } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrev,
  isPlaying,
  togglePlayPause,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-3 text-[#666666] relative">
      <MdKeyboardArrowLeft
        className="text-xl font-thin cursor-pointer"
        onClick={handlePrev}
      />
      {currentPage} / {totalPages}
      <MdKeyboardArrowRight
        className="text-xl font-thin cursor-pointer"
        onClick={handleNext}
      />
      {isPlaying ? (
        <IoMdPause
          className="text-lg cursor-pointer absolute right-5 top-2 lg:static"
          onClick={togglePlayPause}
        />
      ) : (
        <IoMdPlay
          className="text-lg cursor-pointer absolute right-5 top-2 lg:static"
          onClick={togglePlayPause}
        />
      )}
    </div>
  );
};

export default Pagination;
