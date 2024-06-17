import React from "react";

const Contact = () => {
    return (
        <>
            <div className="flex flex-col items-center text-center mt-28 mb-10">
                <h1 className="font-bold text-3xl">Connect with Our Digital Marketing Experts</h1>
                <p className="text-lg">Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
            </div>
            <div className="flex justify-center h-[450px]">
                <div className="bg-white p-10 rounded-lg shadow-2xl flex flex-col md:flex-row md:space-x-10 w-[800px] mb-14">
                    <div className="flex flex-col space-y-4 w-[300px] mr-2">
                        <div>
                            <h2 className="text-sm font-semibold mb-4">Name</h2>
                            <input className="border-2 p-2 rounded-md w-[290px]" type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold mb-4">Phone</h2>
                            <input className="border-2 w-full p-2 rounded-md" type="number" placeholder="Enter your number" />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold mb-4">Email</h2>
                            <input className="border-2 w-full p-2 rounded-md" type="text" placeholder="Enter your email" />
                        </div>
                        <div className="flex justify-center mt-4 w-[600px]">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-[350px]">Get started</button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 mt-4 md:mt-0 h-[290px]">
                        <div>
                            <h2 className="text-sm font-semibold">Message</h2>
                            <textarea className="border-2 w-[300px] p-2 rounded-md h-[240px] mt-4" placeholder="Enter your message"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
