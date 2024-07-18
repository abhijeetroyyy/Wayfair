"use client"
import React, { useRef, useState } from 'react';

const topPicksDetails = [
  {
    title: "Swap Your Sheets",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288309/uploads/tloyete4dj103vhrqa0h.png",
    description: "Fresh sets for all",
  },
  {
    title: "Hampers to Hold it All",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288130/uploads/hb0sqzyoxnxihwmumyzz.png",
    description: "Your laundry, but better",
  },
  {
    title: "Playful, Meet Retro",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288275/uploads/kt1l73nljcvkebttx7kh.png",
    description: "Home office essentials",
  },
  {
    title: "Our Top Table Lamps",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288196/uploads/hffmadha9mslg1jeqg3r.png",
    description: "Brighten things up",
  },
  {
    title: "Hampers to Hold it All",
    imgSrc: "https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721288130/uploads/hb0sqzyoxnxihwmumyzz.png",
    description: "Your laundry, but better",
  },
  // Add more items as needed
];

const TopPicks = () => {
  const cardSliderRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const scrollLeft = () => {
    if (cardSliderRef.current) {
      cardSliderRef.current.scrollBy({
        left: -cardSliderRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (cardSliderRef.current) {
      cardSliderRef.current.scrollBy({
        left: cardSliderRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      scrollRight();
    }

    if (touchStartX - touchEndX < -50) {
      scrollLeft();
    }
  };

  return (
    <div className="Top-picks-for-the-season container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Top Picks for the Season</h1>
      <div className="relative">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10">‹</button>
        <div
          ref={cardSliderRef}
          className="card-slider-wrapper overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="card-slider flex transition-transform duration-500 ease-in-out gap-4">
            {topPicksDetails.map((item, index) => (
              <div 
                key={index} 
                className="card1 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center bg-gradient-to-b from-purple-400/75 via-purple-400/50 to-blue-300/45 flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                style={{ scrollSnapAlign: 'start' }}
              >
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-contain mb-4 rounded" />
                <p className="text-purple-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10">›</button>
      </div>
    </div>
  );
}

export default TopPicks;
