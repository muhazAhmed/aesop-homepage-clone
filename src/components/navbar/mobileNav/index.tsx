"use client";
import React, { useState } from "react";
import ExpandNavModal from "./ExpandNavModal";
import DefaultNavbar from "./DefaultNavbar";

const MobileNavbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  if (isExpanded) {
    return <ExpandNavModal toggleExpansion={toggleExpansion} />;
  } else {
    return <DefaultNavbar toggleExpansion={toggleExpansion} />;
  }
};

export default MobileNavbar;
