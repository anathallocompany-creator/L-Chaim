"use client";

import CateringSection from "./CateringSection";
import CTASection from "./CTASection";
import ServicesGrid from "./ServicesGrid";
import ServiceHero from "./ServicesHero";


export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServicesGrid />
      <CateringSection />
      <CTASection />
    </>
  );
}