import ImageWithDescription from "@/slices/ImageWithDescription";
import React from "react";

const FestiveBox = () => {
  return (
    <ImageWithDescription
      ImagePosition="left"
      data={{
        title: "A complimentary sleeve for your gifts",
        subTitle: "Festive giving",
        content:
          "Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.",
        imgUrl: "/festiveGiftBox.jpg",
        buttonLabel: "Explore gifts",
      }}
    />
  );
};

export default FestiveBox;
