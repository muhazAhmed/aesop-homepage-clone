"use client";

import AromaSection from "@/components/AromaSection";
import FestiveSection from "@/components/FestiveSection";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Hero />
      <FestiveSection />
      <AromaSection />
    </div>
  );
}
