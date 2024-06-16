import React from "react";
import HouseImg from '../Img/bro.png'
const Driving = () =>{
    return(
        <>
          <div className="flex flex-col items-center text-center mt-28 mb-10">
        <h1 className="font-bold text-3xl"> Driving Property Inquiries to Conversions</h1>
        <h3 className="text-lg mt-4">Streamlined Strategies for Real Estate Success </h3>
      </div>
      <div className="flex justify-center items-start mt-10">
        <div className="w-1/2 flex justify-center">
          <img src={HouseImg} alt="House" className="ml-8" />
        </div>
        <div className="w-1/2 mt-20 ">
          <h1 className="font-bold text-lg ">Optimized Path to Property Purchase</h1>
          <p className="mt-4 ">
            In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.
          </p>
          <button className="font-semibold border-2 rounded-3xl px-6 py-2 mt-6 bg-blue-500 text-lg text-white">
            Get Started
          </button>
        </div>
      </div>
        </>
    )
}

export default Driving;