import React from "react";
import banner from "../../public/banner.jpg"
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className=" w-full md:w-1/2 order-2 md:order-1   mt-12 md:mt-32 ">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold ">
              Hello, welcome here to learn something
              <span className="text-pink-600"> new everday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sequi, nobis exercitationem eius reiciendis ab numquam voluptas
              cumque, doloribus, voluptates magnam. Doloribus, cumque.
            </p>
          
        
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                className=""
                placeholder="mail@site.com"
                required
              />
            </label>
           
          </div> 
          <button className="btn mt-6  btn-secondary">Get Started</button>
        </div> 
        <div className=" order-1 w-full md:w-1/2 ">
        <img src={banner} className="w-110 h-92 " alt="" />
        </div>
      </div>
      <br /><br />
    </>
  );
}

export default Banner;
