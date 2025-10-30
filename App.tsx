import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PopularCourses from './components/PopularCourses';
import About from './components/About';
import Membership from './components/Membership';
import Corporate from './components/Corporate';
import TrustedBy from './components/TrustedBy';
import News from './components/News';
import Testimonials from './components/Testimonials';
import FaqBanner from './components/FaqBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBot from './components/WhatsAppBot';


import Preloader from './components/Preloader'; // <-- Add this import

const Home: React.FC = () => (
  <>
    <Hero />
    <Stats />
    <Membership />
    <TrustedBy />
    <PopularCourses />
    <Testimonials />
    <FaqBanner />
  </>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // <-- Loader state

  useEffect(() => {
    // Simulate loading (change to your actual data/api logic if needed)
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />; // Show preloader until done

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsAppBot />
      <Footer />
      
    </div>
  );
};
// this code is for whatsssap floating button: 


export default App;
