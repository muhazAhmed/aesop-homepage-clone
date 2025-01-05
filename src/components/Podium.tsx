"use client";
import { PodiumData } from "@/lib/data";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Podium = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="py-[75px] w-full relative group">
      <div className="relative mx-auto">
        <Slider {...settings} ref={sliderRef}>
          {PodiumData.map((item) => (
            <div
              key={item.id}
              className="text-center px-4"
              style={{ userSelect: "none" }}
            >
              <div className="flex flex-col justify-end items-center h-[400px]">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="max-w-sm object-contain"
                />
                <div className="text-[#333] mt-6 text-center">
                  <h3 className="font-semibold leading-3 text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={handlePrev}
          className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-footerBlack hover:bg-footerBlack group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300 text-textPrimary lg:h-20 lg:w-16 lg:flex items-center justify-center"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNext}
          className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-footerBlack hover:bg-footerBlack group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300 text-textPrimary lg:h-20 lg:w-16 lg:flex items-center justify-center"
        >
          <FaAngleRight />
        </button>

        <div className="mt-4 flex justify-center">
          {PodiumData.map((_, index) => (
            <div
              key={index}
              className={`h-1 mx-1 w-8 transition-all duration-300 ${
                index === currentSlide ? "bg-black h-[4px] w-10" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podium;
