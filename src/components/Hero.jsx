"use client";

import HeroSlider from "./HeroSlider";
import FeatureSidebar from "./FeatureSidebar";
import HotProducts from "./HotProducts";
import PromoBannerSlider from "./PromoBannerSlider";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-3 sm:py-4 lg:py-6">
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-14">

        {/* ================= MOBILE ================= */}
        <div className="block lg:hidden">

          {/* Hero + Feature Overlay */}
          <div className="relative w-full">

            {/* Hero Slide */}
            <div className="w-full">
              <HeroSlider />
            </div>

            {/* Feature Sidebar ON TOP of Hero */}
            <div className="absolute left-0 right-0 -bottom-21 z-20 px-2">
              <FeatureSidebar />
            </div>

          </div>

        

        </div>


        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">

          {/* Main Hero */}
          <div className="lg:col-span-10 min-w-0">

            <HeroSlider />

           
              
          </div>


          {/* Sidebar */}
          <div className="lg:col-span-2 min-w-0">

            <FeatureSidebar />
          </div>

        </div>

      </div>
    </section>
  );
}