import React from "react";
import Barlogo from "../Img/Seo.png";
import PPClogo from "../Img/PPC.png";
import vector from "../Img/Social.png";
import Vector1 from "../Img/Content.png";
import vector2 from "../Img/Web.png";
import vector3 from "../Img/Data.png";
import vector4 from "../Img/End.png";
import vector5 from "../Img/Video.png";

const Services = () => {
  return (
    <>
      <div className=" bg-purple-50">
        <div>
          <h1 className=" font-bold text-2xl flex justify-center mt-40">Our Service Offerings</h1>
          <p className=" flex justify-center mt-6"> Strategies that Drive Property Market Excellence</p>
          <div className="grid grid-cols-4 gap-8 m-16">
  <div className="border-2 border-solid p-10">
    <img className=" ml-20 " src={Barlogo} alt="" />
    <h1 className="font-bold ml-8 mt-2">Automotive SEO</h1>
    <p className="ml-2 mt-2">
      Drive Your Success with Automotive SEO: Ignite Online Visibility and
      Outrace the Competition. Accelerate Your Business Growth Today
    </p>
  </div>
  <div className="border-2 border-solid p-14 ">
    <img className="ml-14 m" src={PPClogo} alt="logo" />
    <h1 className="font-bold mt-2 ml-8">PPC Precision</h1>
    <p className="ml-2 mt-2">
      Maximize visibility and drive quality traffic with meticulously targeted
      Pay-Per-Click campaigns.
    </p>
  </div>
  <div className="border-2 border-solid p-11">
    <img className="ml-16" src={vector} alt="" />
    <h1 className="font-bold mt-2 ml-6">Social Acceleration</h1>
    <p className="ml-2">
      Engage and influence your audience across social media platforms,
      amplifying your brand's presence and connection.
    </p>
  </div>
  <div className="border-2 border-solid p-10">
    <img className="ml-16" src={Vector1} alt="" />
    <h1 className="font-bold ml-8 mt-2">Content Excellence</h1>
    <p className="ml-2">
      Craft compelling, automotive-specific content that resonates with
      enthusiasts and drives engagement.
    </p>
  </div>
  <div className="border-2 border-solid p-10  ">
    <img className="ml-16" src={vector2} alt="" />
    <h1 className="font-bold ml-8 mt-2">Web Design</h1>
    <p className="ml-2">
      Transform visitors into customers with high-performance websites designed
      for seamless user experiences and increased conversions.
    </p>
  </div>
  <div className="border-2 border-solid p-10">
    <img className="ml-20" src={vector3} alt="" />
    <h1 className="font-bold ml-8 mt-2">Data-Driven Insights</h1>
    <p className="ml-2">
      Leverage data to refine your strategies, making informed decisions that
      drive revenue growth.
    </p>
  </div>
  <div className="border-2 border-solid p-10">
    <img className="ml-20" src={vector4} alt="" />
    <h1 className="font-bold mt-2 ml-8">End-to-End Solutions</h1>
    <p className="ml-2 ">
      From initial awareness to post-purchase loyalty, we offer full-funnel
      solutions that guide customers through every step of their journey.
    </p>
  </div>
  <div className="border-2 border-solid p-10">
    <img className="ml-20" src={vector5} alt="" />
    <h1 className="font-bold mt-2 ml-8">Video marketing</h1>
    <p className="ml-2">
      Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your
      Brand with Compelling Visual Stories.
    </p>
  </div>
</div>

        </div>
        <div className="flex justify-center mt-8">
          <button className="font-semibold border-2 rounded-3xl px-[60px] py-[10px] bg-blue-500 text-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
