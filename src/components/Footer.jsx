import React from "react";
import Logo from '../Img/Osamare-White-logo.png'
import Logo1 from '../Img/twitter-x-line.png'
import Logo2 from '../Img/facebook-box-fill.png'
import Logo3 from '../Img/pinterest-fill.png'
import Logo4 from '../Img/pinterest.png'
import Logo5 from '../Img/whatsapp.png'
import Logo6 from '../Img/whatsapp-fill.png'


const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-3xl m-8 h-[600px] ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <img src={Logo} alt="Logo" className="mb-4" />
                    <p className="text-sm text-gray-700">The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
                    <p className="mt-4 text-sm font-bold">Address</p>
                    <p className="text-sm text-gray-700">Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharashtra, India.</p>
                    <p className="mt-4 text-sm font-bold">Contacts</p>
                    <p className="text-sm text-gray-700">📧 hello@osumare.in</p>
                    <p className="text-sm text-gray-700">📞 +91 8459 8762 26</p>
                </div>
                <div className="mb-6 md:mb-0">
                    <p className="text-sm font-bold mb-4">Menu</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Work</li>
                        <li>Blog</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm font-bold mb-4">Social</p>
                    <div className="flex space-x-4 text-gray-700">
                        <img className="w-6 h-6" src={Logo1} alt="Twitter" />
                        <img className="w-6 h-6" src={Logo2} alt="Facebook" />
                        <img className="w-6 h-6" src={Logo3} alt="YouTube" />
                        <img className="w-6 h-6" src={Logo4} alt="Pinterest" />
                        <img className="w-6 h-6" src={Logo5} alt="WhatsApp" />
                        <img className="w-6 h-6" src={Logo6} alt="Instagram" />
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-600">
                © 2023 Osumare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;