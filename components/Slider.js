"use client"
import React, { useState, useEffect, useRef } from 'react';

const images = [
  "https://assets.wfcdn.com/im/82869752/resize-h566-w2000%5Ecompr-r85/2874/287476923/good_vibes_sleep._modern_sleep_science_for_the_best_night%27s_rest._shop_now_287476923.jpg",
  "https://assets.wfcdn.com/im/83245673/resize-h566-w2000%5Ecompr-r85/2909/290989943/black_friday_in_july_deals_are_here%21_choose_how_you_pay._shop_now_290989943.jpg",
  "https://assets.wfcdn.com/im/03749430/resize-h566-w2000%5Ecompr-r85/2909/290998665/sunbrella_sink_into_comfort_that_really_performs._shop_now_290998665.jpg",
  "https://assets.wfcdn.com/im/12842347/resize-h566-w2000%5Ecompr-r85/2898/289888192/up_to_40%25_off_select_mattresses_%26_more_serta_shop_now_289888192.jpg"// Add more image URLs as needed
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const totalSlides = images.length;

  const autoSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const manualSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <>
      <div className="Image-Sliderrrr max-w-[1440px] mx-auto overflow-hidden relative">
        <div className="slider relative flex" ref={sliderRef}>
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Slide ${index + 1}`} className="hover:cursor-pointer w-full" />
          ))}
        </div>
        <div className="absolute w-full flex justify-center bottom-5">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 bg-gray-700 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-purple-600' : ''}`}
                onClick={() => manualSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
