import React from "react";
import Logo from "../Img/osumare.png";
import HeaderImg from "../Img/Headerimage.png";
import Cuate from '../Img/cuate.png'

import backgroundImg from '../Img/Bg.png'
const GetStarted = () => {
  return (
    <div className="bg-cover bg-center  " style={{backgroundImage:`url(${backgroundImg})`}}>
      <div className=" bg-slate-50 p-4 flex items-center justify-between w-ful">
        <img className=" w-44 h-44 cursor-pointer" src={Logo} alt="Logo" />
        <button className=" font-bold border-2 rounded-3xl   px-[58px] py-[10px] ">Contact Us</button>
      </div>
      <div className=" text-center">
      <h1 className="font-mono text-5xl font-semibold">
          Elevate <span className="text-blue-500">Real Estate Success</span>    With 
        </h1>
        <h1 className="font-mono font-semibold   text-3xl pt-2">
       Osumare's Digital Expertise
        </h1>

        <p className="pt-2  mb-4">Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
        <button className=" font-semibold border-2 rounded-3xl   px-[100px] py-[10px] bg-blue-500 text-xl  text-white  ">Get Started</button>


      </div>
      <div>
      <img className=" w-4/12 h-96 mx-auto block mt-16" src={HeaderImg} alt="Logo" />

      <h1 className=" mt-36 font-bold  text-2xl flex justify-center">Real Estate-Focused Digital Mastery</h1>

      <div className="mt-36 flex items-center justify-center">
  <img className="w-96 ml-72" src={Cuate} alt="img" />
  <div className="ml-8">
    <h1 className="font-bold text-2xl">
      Unlock the Potential of Digital Real Estate Excellence
    </h1>
    <p className="mt-2">
      At Osumare, we understand that the real estate landscape demands a digital
      presence that aligns with the intricacies of property marketing. Our range
      of specialized services is meticulously designed to catapult your brand's
      success in the ever-evolving digital property market.
    </p>
    <button className=" font-semibold border-2 rounded-3xl   px-[60px] py-[10px] bg-blue-500 text-lg  text-white mt-8  ">Get Started</button>

  </div>
</div>

      </div>
      
    </div> 
  );
};

export default GetStarted;
