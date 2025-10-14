import React from 'react';


function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px]">
      {/* Background image 
      <img
        src="https://iili.io/KNGzt4t.jpg"
        alt="Banner"
        className="w-full h-11/12 object-cover brightness-75"
      />*/}

        <video   autoPlay
  muted
  loop
  playsInlinecontrols={false} className="">
          <source
            src="https://www.pexels.com/download/video/8230490/"
            type="video/mp4"
          />
        </video>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col pt-8 md:pt-16 items-start justify-start text-white px-4">
        <h1 className="text-left text-lg sm:text-xl  lg:text-5xl font-bold mb-4 leading-snug">
          Miles of Possibility. <br />
        </h1>
        <h3 className='md:text-5xl sm:text-4xl'>Turn weekend wishes into passport stamps.</h3> <br />
       {/*   <button className="btn btn-primary px-6 py-2 text-sm sm:text-base md:text-lg">
          Button
        </button> */}

         {/* Labels */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600 backdrop-blur px-4 py-2
                   text-white text-sm font-medium shadow ">
    <span className="text-base">✈️</span>
    <span>Best Fare Guarantee</span>
  </span>

  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2
                   text-white text-sm font-medium shadow ring-1 ring-white/20">
    <span className="text-base">⭐</span>
    <span>24/7 Support</span>
  </span>
</div>
      </div>
    </div>
  );
}

export default Banner;
