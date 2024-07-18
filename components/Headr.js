import React from 'react';

const Headr = () => {
  return (
    <>
      <nav className="topnav bg-customPurple h-10 flex justify-evenly">
        <div className="p-2 flex gap-2 items-center">
          <p className="text-white text-sm md:text-sm">All kinds of appliances for every Budget</p>
          <span className="ph--arrow-up origin-center rotate-90 text-white"></span>
        </div>
        <div className="flex gap-4 p-2 items-center">
          <ul className="text-white text-sm md:text-sm md:flex hidden">Financing</ul>
          <hr className="w-5 my-3 origin-center rotate-90 hidden md:block" />
          <ul className="text-white text-sm md:text-sm md:flex hidden">Professional</ul>
          <hr className="w-5 my-3 origin-center rotate-90 hidden md:block" />
          <span className="ic--twotone-local-shipping text-white"></span>
          <ul className="text-white text-sm md:text-sm sm:flex hidden">FREE Shipping over $35</ul>
        </div>
      </nav>
      <nav className="bottomnav p-2 my-3">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <span className="fe--bar"></span>
          <img src="https://res.cloudinary.com/ddjvqd8o4/image/upload/v1721277422/uploads/uu05rs9mjs2tzdr5prhm.png" alt="Logo" className="w-auto h-10" />
          <div className="flex items-center w-full max-w-md relative mx-4 sm:flex hidden">
            <input type="text" name="" id="" placeholder="Search anything for Home..." className="border-solid border-2 w-full rounded-full h-10 px-4" />
            <span className="mingcute--search-line absolute right-2 top-1 cursor-pointer"></span>
          </div>
          <div className="flex items-center space-x-10">
            <span className="mdi--account"></span>
            <span className="bi--cart-fill"></span>
          </div>
        </div>
      </nav>
      <hr className="my-3" />
    </>
  );
}

export default Headr;