"use client"
import React from 'react';

const RugSale = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 320px) {
          .top-56-320px {
            top: 4rem; /* top-56 in Tailwind CSS is 14rem */
          }
        }
      `}</style>
      <div className="rugs flex flex-wrap justify-center gap-10 p-5 max-w-[1440px] mx-auto mt-10">
        <div className="relative w-full md:w-1/2 bg-gradient-to-b from-[#FFFFFF] to-[#7b189f93] rounded-lg overflow-hidden shadow-lg">
          <div className="absolute top-2 right-2 sm:top-56 md:top-4 md:right-4 bg-white rounded-full p-2 md:p-4 shadow-lg -rotate-45 w-16 md:w-auto top-56-320px">
            <div className="text-center font-bold text-xs md:text-base">
              <div>UPTO</div>
              <div className="text-xl md:text-3xl text-purple-600">60%</div>
              <div>OFF</div>
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">
              RUG FOR <span className="text-purple-600">SALE</span>
            </h1>
            <p className="mt-4 text-gray-700">
              Set up your style<br />
              Below your <span className="font-bold">Budget</span>
            </p>
            <img src="https://assets.wfcdn.com/im/70447111/resize-h755-w755%5Ecompr-r85/1775/177527018/Epps+Southwestern+Rug.jpg" alt="Rug" className="mx-auto my-6 w-full md:w-4/5" />
          </div>
        </div>
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gradient-to-b from-[#FFFFFF] to-[#7b189f93] p-5 rounded-lg shadow-lg">
          {[
            { title: 'Area Rugs', imgSrc: 'https://assets.wfcdn.com/im/70447111/resize-h755-w755%5Ecompr-r85/1775/177527018/Epps+Southwestern+Rug.jpg', discount: '60%' },
            { title: 'Outdoor Rugs', imgSrc: 'https://assets.wfcdn.com/im/70447111/resize-h755-w755%5Ecompr-r85/1775/177527018/Epps+Southwestern+Rug.jpg', discount: '60%' },
            { title: 'Halfway Runners', imgSrc: 'https://assets.wfcdn.com/im/70447111/resize-h755-w755%5Ecompr-r85/1775/177527018/Epps+Southwestern+Rug.jpg', discount: '50%' },
            { title: 'Bath Rugs', imgSrc: 'https://assets.wfcdn.com/im/70447111/resize-h755-w755%5Ecompr-r85/1775/177527018/Epps+Southwestern+Rug.jpg', discount: '40%' },
          ].map((rug, index) => (
            <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-purple-900 text-white p-2 px-4 rounded-bl-lg">
                <div className="text-center text-xs font-bold">
                  <div>UPTO</div>
                  <div className="text-2xl">{rug.discount}</div>
                  <div className="text-sm">--off--</div>
                </div>
              </div>
              <div className="p-4">
                <img src={rug.imgSrc} alt={rug.title} className="w-full rounded-lg" />
                <p className="mt-4 text-lg font-bold text-gray-800 text-center">{rug.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RugSale;
