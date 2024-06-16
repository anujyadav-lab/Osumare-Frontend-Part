import React from "react";
import Weather from '../Img/weather.png'
import Mass from '../Img/mass.png'
import ThreeD from '../Img/3d.png'
import Medal from '../Img/medal.png'



const Expertise = () =>{
    return(
        <>
          <div className="flex flex-col items-center text-center mt-28 mb-10">
        <h1 className="font-bold text-3xl">Our Expertise in Action</h1>
      </div>
     
      
          
          <div className="grid grid-cols-2 gap-4 m-16">
  
  <div className="border-2 border-solid p-10 w-96 ml-44  ">
    <img className=" ml-20  bg-slate-300 rounded-full " src={Weather} alt="logo" />
    <h1 className="font-bold ml-12 mt-2">Effective CTAs</h1>
    <p className="ml-2">
    See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.    </p>
  </div>
  <div className="border-2 border-solid p-10 w-96  ">
    <img className=" ml-20  bg-slate-300 rounded-full" src={Mass} alt="logo" />
    <h1 className="font-bold ml-12 mt-2">Conversion-Optimized Landing Pages</h1>
    <p className="ml-12">
    Explore a case study where our landing page optimization increased property lead conversion rates by 30%    </p>
  </div>
  <div className="border-2 border-solid p-10 w-96 ml-44">
    <img className="ml-20   bg-slate-300 rounded-full" src={ThreeD} alt="" />
    <h1 className="font-bold mt-2 ml-12">Trust Building with Social Proof</h1>
    <p className="ml-12 ">
    Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project    </p>
  </div> 
  <div className="border-2 border-solid p-10 w-96 ">
    <img className="ml-20   bg-slate-300 rounded-full" src={Medal} alt="" />
    <h1 className="font-bold mt-2 ml-12">Mobile-First Success:</h1>
    <p className="ml-12">
    Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.    </p>
  </div>
</div>
<div className="flex flex-col items-center text-center mt-28 mb-10">
  <h1 className="font-bold text-3xl">Your Peace of Mind</h1>
  <p className="ml-20 mt-4">
    Through our conversion-focused strategies, <br />
    we ensure that property seekers are not just visitors, <br />
    but engaged prospects ready to make their next move in the real estate market
  </p>
  <button className="font-semibold border-2 rounded-3xl px-[60px] py-[10px] bg-blue-500 text-lg text-white mt-4">
    Get started
  </button>
</div>

      
      
       
        </>
    )
}

export default  Expertise;
