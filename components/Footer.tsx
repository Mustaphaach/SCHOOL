import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#232345] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex flex-col items-start mb-4">
              <img
                src="https://i.postimg.cc/T3N2RJ5Q/Gemini-Generated-Image-a6q9r3a6q9r3a6q9-removebg-preview.png"
                alt="Arabic Language Centre Logo"
                className="h-14 w-auto mb-2"
                style={{ maxWidth: '160px' }}
              />
              
            </a>
            <p className="text-sm text-blue-200">
              Empowering learners to speak confidently, bridge cultures, and discover the joy of communication through high-quality Arabic language education.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-200 hover:text-white"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" className="text-blue-200 hover:text-white"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" className="text-blue-200 hover:text-white"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">What's New</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-200">
              <li>World Trade Centre, 4th Floor</li>
              <li>info@arabiclanguagencentre.com</li>
              <li>+971 4 331 5600</li>
              <li className="pt-2">Opening Hours: Mon - Fri 9:00am-6:00pm</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© Manarat AlOfoq – All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
