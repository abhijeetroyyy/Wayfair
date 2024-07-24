import React from 'react'
import Headr from '@/components/Headr'
import "./globals.css";
import Slider from '@/components/Slider';
import Department from '@/components/Department';
import TopPicks from '@/components/TopPicks';
import RugSale from '@/components/RugSale';
import BrandCarousel from '@/components/BrandCarousel';
import ImpactSection from '@/components/ImpactSection';
import About from '@/components/About';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <>
    <Headr/>
    <Slider/>
    <Department/>
    <TopPicks/> 
    <RugSale/>
    <BrandCarousel/>
    <ImpactSection/>
    <About/>
    <Footer/>
    </>
  )
}

export default page
