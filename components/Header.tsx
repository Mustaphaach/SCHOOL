import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons/MenuIcons';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2">
    {children}
  </Link>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/vHqK4gPt/283300626-112024138180001-5740127300020984464-n-removebg-preview.png"
                alt="Arabic Language Centre Logo"
                className="h-16 w-auto object-contain"
                style={{ maxWidth: '180px' }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/corporate">Corporate</NavLink>
            <NavLink to="/news">What's New</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-[#2b2b5c] hover:bg-[#232345] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center"
            >
              Join us <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
            <Link to="/corporate" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Corporate</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">What's New</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
          </div>
          <div className="p-4">
            <Link
              to="/contact"
              className="w-full block text-center bg-[#2b2b5c] hover:bg-[#232345] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Get started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
