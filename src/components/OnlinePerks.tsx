import ImageWithDescription from "@/slices/ImageWithDescription";
import React from "react";

const OnlinePerks = () => {
  return (
    <ImageWithDescription
      ImagePosition="right"
      data={{
        title: "Gestures to enhance your experience",
        subTitle: "Our online offering ",
        content:
          "Discover a suite of complimentary additions available with every order, including curated product samples, gift wrapping in our signature cotton bag and personalized gift messaging. ",
        videoUrl:
          "https://videos.ctfassets.net/u1nb1km7t5q7/1vcs0LHREpU7wUIViDZfsh/165c6e7b54d4198d94005227a6768a2c/Aesop_Gestures_Page_Web_Secondary_Message_Mid_Desktop_1920x1080px.mp4",
        buttonLabel: "Explore our online offerings",
      }}
    />
  );
};

export default OnlinePerks;
