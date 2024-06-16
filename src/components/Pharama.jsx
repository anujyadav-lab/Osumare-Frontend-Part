import React from "react";
import Video from '../Img/Video.png'
import Pic from '../Img/Pic.png'

const Pharama = () =>{
    return(
        <>
        
        <div className="flex justify-center items-start mt-10 border-4 border-solid bg-slate-50 rounded-lg w-[1,117px]">
        <div className="w-1/2 flex justify-center">
          <img src={Video} alt="House" className="ml-8"  />
        </div>
        <div className="w-1/2 mt-20 ">
        <img src={Pic} alt="" />
          <h1 className="font-bold text-lg flex ">Tabish khan</h1>
          <p className="mt-4 ">
          Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.          </p>
          <button className="font-semibold border-2 rounded-3xl px-6 py-2 mt-6 bg-blue-500 text-lg text-white">
            Get Started
          </button>
        </div>
      </div>
        </>
        
    )
}
export default Pharama