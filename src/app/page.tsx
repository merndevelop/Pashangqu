"use client"

import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import SpecificProducts from "@/components/SpecificProduct";
import ChooseUs from "@/components/ChooseUs";
import Wavy from "@/components/Wavy";


export default function Home() {
 
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
    <HeroSection/>
    <FeaturedProducts/>
    <SpecificProducts/>
    <ChooseUs/>
    <Wavy/>
    
   </main>
  );
}
