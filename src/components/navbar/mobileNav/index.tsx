"use client";
import React, { useState } from "react";
import ExpandNavModal from "./ExpandNavModal";
import DefaultNavbar from "./DefaultNavbar";

const MobileNavbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  if (isExpanded) {
    return (
      <ExpandNavModal
        toggleExpansion={toggleExpansion}
        isExpanded={isExpanded}
      />
    );
  } else {
    return (
      <DefaultNavbar
        toggleExpansion={toggleExpansion}
        isExpanded={isExpanded}
      />
    );
  }
};

export default MobileNavbar;
