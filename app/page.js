import React from 'react';
import Headr from '@/components/Headr';
import "./globals.css";
import Slider from '@/components/Slider';
import Department from '@/components/Department';
import TopPicks from '@/components/TopPicks';
import RugSale from '@/components/RugSale';
import BrandCarousel from '@/components/BrandCarousel';
import ImpactSection from '@/components/ImpactSection';
import About from '@/components/About';
import Footer from '@/components/Footer';
import HorizontalScroll from '@/components/HorizontalScroll';

const Page = () => {
  return (
    <>
      <Headr />
      <Slider />
      <Department />
      <TopPicks />
      <RugSale />
      <div className="hidden sm-736:block">
        <HorizontalScroll />
      </div>
      <BrandCarousel />
      <ImpactSection />
      <About />
      <Footer />
    </>
  );
}

export default Page;
