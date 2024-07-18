import React from 'react'
import Headr from '@/components/Headr'
import "./globals.css";
import Slider from '@/components/Slider';
import Department from '@/components/Department';
import TopPicks from '@/components/TopPicks';
const page = () => {
  return (
    <>
    <Headr/>
    <Slider/>
    <Department/>
    <TopPicks/> 
    </>
  )
}

export default page