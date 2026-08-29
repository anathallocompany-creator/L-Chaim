import BackgroundLayer from "@/components/BackgroundLayer";
import BestSellingTreats from "@/components/BestSellingTreats";
import ChildrenCakesSection from "@/components/ChildrenCakesSection";
import DessertsSection from "@/components/DessertsSection";
import GallerySlider from "@/components/Gallery";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white rounded-b-3xl">
        <ProductSection />
        <PromoBanner />
        <BestSellingTreats />
      </div>
      
      <BackgroundLayer />
      <GallerySlider />
      

    </>
  );
}