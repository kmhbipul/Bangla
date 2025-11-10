import React, { Component } from 'react'

function Cards() {
  return (
    <div className='bg-green-700 py-20 mt-20 gap-x-20 flex flex-col md:flex-row justify-center items-center font-bold text-2xl'>
      

          <div>
            <img
              className="rounded-2xl w-full h-56 hover:opacity-70"
              src="/videos/wd.png"
              alt=""
            />
            <p className="text-center">Air Ticket</p>
          </div>

          <div>
            <img
              className="rounded-2xl w-full  h-56 hover:opacity-70"
              src="/videos/vp.png"
              alt=""
            />
            <p className="text-center">Visa Processing</p>
          </div>

          <div>
            <img
              className="rounded-2xl w-full h-56 hover:opacity-70"
              src="/videos/tp.png"
              alt=""
            />
            <p className="text-center">Tour Packages</p>
          </div>


    </div>
  )
}

export default Cards
