"use client";

import AromaSection from "@/components/AromaSection";
import Hero from "@/components/hero/Hero";
import Podium from "@/components/Podium";
import FestiveBox from "@/components/FestiveBox";
import OnlinePerks from "@/components/OnlinePerks";
import CorporateGifts from "@/components/CorporateGifts";
import Thought from "@/components/Thought";
import Certification from "@/components/Certification";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Hero />
      <FestiveBox />
      <AromaSection />
      <Podium />
      <OnlinePerks />
      <CorporateGifts />
      <Thought />
      <Certification />
      <Footer/>
    </div>
  );
}
