import React from "react";
import Video from '../Img/Video.png';
import Pic from '../Img/Pic.png';
import TextSymbol from '../Img/Symbol.png';
import BackArrow from '../Img/BackArrow.png'
import FrontArrow from '../Img/FrontArrow.png'



const Pharama = () => {
  return (
    <>
     <div className="flex flex-col items-center text-center mt-28 mb-10">
        <h1 className="font-bold text-3xl">What Our Pharma Partners Say</h1>
        <p className=" text-lg">Driving Transformations, One Brand at a Time</p>
      </div>
      <div className="flex justify-center items-start mt-10 border-4 border-solid  rounded-lg w-[1117px] p-12 ml-40 mb-8 shadow-bottom  ">
        <div className="w-[600px] h-[500px] flex justify-center p-4">
          <img src={Video} alt="House" className="ml-8" />
        </div>
        <div className="w-1/2 mt-20 ml-14">
          <div className="flex items-center">
            <img src={Pic} alt="Tabish Khan" className="rounded-full w-16 h-16" />
            <h1 className="font-bold text-lg ml-4">Tabish Khan</h1> 
            <img className=" h-8 ml-16" src={TextSymbol} alt="" />
          </div>
          <p className="mt-4">
            Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.
          </p>
         
        </div>
      </div>
      <div className="flex justify-center">

      <img className=" border-2 rounded-full" src={FrontArrow} alt="logo" />
      <img className="border-2 rounded-full ml-8" src={BackArrow} alt="logo" />
      </div>
     

    </>
  );
};

export default Pharama;
