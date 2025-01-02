"use client";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleLayoutChange = () => {
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", handleLayoutChange);
    handleLayoutChange();

    return () => window.removeEventListener("resize", handleLayoutChange);
  }, []);

  return windowSize;
};

export default useWindowSize;
