import React from "react";
import OnlineStore from '../Img/online-store.png'
import Frame from '../Img/Frame867.png'
import Virtual from '../Img/virtual.png'
import Augmented from '../Img/augmented-reality.png'



const DrivingInq = () =>{
    return(
        <>
          <div className="flex flex-col items-center text-center mt-28 mb-10">
        <h1 className="font-bold text-3xl"> Driving Property Inquiries to Conversions</h1>
      </div>
     
      
          
          <div className="grid grid-cols-2 gap-4 m-16">
  
  <div className="border-2 border-solid p-10 w-96 ml-44  ">
    <img className=" ml-20  bg-slate-300 rounded-full " src={Virtual} alt="logo" />
    <h1 className="font-bold ml-12 mt-2">Call-to-Action Optimization</h1>
    <p className="ml-2">
    Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.
    </p>
  </div>
  <div className="border-2 border-solid p-10 w-96  ">
    <img className=" ml-20  bg-slate-300 rounded-full" src={OnlineStore} alt="logo" />
    <h1 className="font-bold ml-12 mt-2">Landing Page Efficiency</h1>
    <p className="ml-12">
    Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.
    </p>
  </div>
  <div className="border-2 border-solid p-10 w-96 ml-44">
    <img className="ml-20   bg-slate-300 rounded-full" src={Frame} alt="" />
    <h1 className="font-bold mt-2 ml-12">Social Proof Utilization</h1>
    <p className="ml-12 ">
    Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action
    </p>
  </div> 
  <div className="border-2 border-solid p-10 w-96 ">
    <img className="ml-20   bg-slate-300 rounded-full" src={Augmented} alt="" />
    <h1 className="font-bold mt-2 ml-12">Mobile-Friendly Experience</h1>
    <p className="ml-12">
    With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.
    </p>
  </div>
</div>

        </>
    )
}

export default  DrivingInq;