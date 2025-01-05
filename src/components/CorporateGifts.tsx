import ImageWithDescription from "@/slices/ImageWithDescription";
import React from "react";

const CorporateGifts = () => {
  return (
    <ImageWithDescription
      ImagePosition="left"
      data={{
        title: "Tokens of appreciation",
        subTitle: "Corporate gifts",
        content:
          "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.",
        imgUrl:
          "https://www.aesop.com/u1nb1km7t5q7/6FbqraGc96gts4wqXBENFI/7af21353122e60409a730e81ba9e434a/Aesop_Gift_Kits_2022-23_Web_Homepage_Secondary_Corporate_Gifting_Mid_Desktop_2560x1440px.jpg",
        buttonLabel: "Learn more about this service",
      }}
    />
  );
};

export default CorporateGifts;
