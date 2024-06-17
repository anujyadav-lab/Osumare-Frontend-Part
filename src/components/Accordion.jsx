
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <>
   
    <div className="border border-gray-300 rounded-lg mb-4">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
        onClick={toggleAccordion}
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <div>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-300">
          <p>{content}</p>
        </div>
      )}
    </div>
    </>
  );
};

const List = () => {
  return (
    <>
    <div  className="flex flex-col items-center text-center mt-28 mb-10">
    <h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
    <p className=" text-lg">Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>

  </div>
    <div className="max-w-xl mx-auto mt-10">
      <Accordion 
        title=" How does Osumare measure campaign success?" 
        content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand." 
      />
      <Accordion 
        title=" How does Osumare measure campaign success?" 
        content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand." 
      />
      <Accordion 
        title="How does Osumare measure campaign success?" 
        content="We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand." 
      />
    </div>
    </>
  );
};

export default List;

