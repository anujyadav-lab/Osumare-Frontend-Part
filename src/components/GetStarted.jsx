import React from "react";
import Logo from "../Img/osumare.png";
import backgroundImg from '../Img/Bg.png'
const GetStarted = () => {
  return (
    <div className=" " style={{backgroundImage:`url(${backgroundImg})`}}>
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
    </div> 
  );
};

export default GetStarted;
