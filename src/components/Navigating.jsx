import React from "react";
import Bard from "../Img/bard-fill.png"
import flashlight from "../Img/flashlight-fill.png"
import phone from "../Img/phone-find-fill.png"
import shield from "../Img/shield-check-fill.png"
import frameImg from "../Img/Frame.png"

const Navigating = () =>{
    return(
        <>
        <div className=" flex justify-center flex-col m-56 text-2xl mt-28" >
            <h1 className=" font-bold  ml-80">Navigating Real Estate's Digital Landscape</h1>
            <h3 className=" text-lg flex justify-center mt-">Insights for Real Estate Marketing Advantage</h3>

        </div>


        <div className="flex flex-col p-8" style={{ 
                backgroundImage: `url(${frameImg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain', // or 'cover' depending on your preference
                backgroundPosition: 'center'
            }}>
  <div className="flex items-center mb-8 border-2 rounded-lg w-80 h-20 p-2">
    <img src={Bard} alt="logo" className="mr-4" />
    <div>
      <h1 className="font-bold">Market Trends Analysis</h1>
      <p className="text-xs">Predictive insights to guide real estate strategies.</p>
    </div>
  </div>
  <div className="flex items-center mb-8 border-2 rounded-lg w-80 h-20 p-2">
    <img src={flashlight} alt="logo" className="mr-4" />
    <div>
      <h1 className="font-bold">Targeted Buyer Persona</h1>
      <p className="text-xs">Understand and connect with your ideal property buyers.</p>
    </div>
  </div>
  <div className="flex items-center mb-8 border-2 rounded-lg w-80 h-20 p-2">
    <img src={phone} alt="logo" className="mr-4" />
    <div>
      <h1 className="font-bold">Competitor Insights</h1>
      <p className="text-xs">Stand out in the property market with informed strategies.</p>
    </div>
  </div>
  <div className="flex items-center border-2 rounded-lg w-80 h-20 p-2">
    <img src={shield} alt="logo" className="mr-4" />
    <div>
      <h1 className="font-bold">Visual Content Appeal</h1>
      <p className="text-xs">Captivate buyers with appealing visuals and immersive experiences.</p>
    </div>
  </div>
</div>

        </>
    )
}

export default Navigating;