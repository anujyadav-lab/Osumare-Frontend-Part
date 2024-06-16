import React from "react";
import HouseImg from '../Img/bro.png'
const Driving = () =>{
    return(
        <>
          <div className="flex flex-col items-center text-center mt-28 mb-10">
        <h1 className="font-bold text-3xl"> Driving Property Inquiries to Conversions</h1>
        <h3 className="text-lg mt-4">Streamlined Strategies for Real Estate Success </h3>
      </div>
      <h1 className=" font-bold ml-[690px] text-lg">Optimized Path to Property Purchase</h1>

        <div className=" flex ">
            <img className=" ml-48" src={HouseImg} alt="logo" />

            <p className=" mt-20 ml-4">In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
        </div>
        <button className="font-semibold border-2 rounded-3xl px-[60px] py-[10px] bg-blue-500 text-lg text-white">
            Get Started
          </button>
        </>
    )
}

export default Driving;