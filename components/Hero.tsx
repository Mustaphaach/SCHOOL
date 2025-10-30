import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CUSTOMER_IMAGES = [
  "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-1.jpg",
  "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-2.jpg",
  "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-3.jpg",
  "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-4.jpg",
  "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-5.jpg",
  "https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/customers/customer-6.jpg",
];

const Hero: React.FC = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowImage(true), 150); // Smooth fade-up
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#2b2b5c] via-fdf2e9 to-[#fdf2e9] text-white pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 drop-shadow">
              The Future Speaks Beautifully!
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-normal">
              Our young learners at Manart Alofoq impress everyone with their fluent Arabic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link to="/contact" className="w-full sm:w-auto text-center bg-[#2b2b5c] hover:bg-[#4875b3] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow">
                Join us
              </Link>
              <Link to="/about" className="w-full sm:w-auto text-center bg-transparent border-2 border-white hover:bg-white hover:text-[#4875b3] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow">
                About Us
              </Link>
            </div>

            <div className="flex items-center gap-5 justify-center lg:justify-start mt-12">
              <div className="flex -space-x-4">
                {CUSTOMER_IMAGES.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Customer ${index + 1}`}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-lg font-semibold text-blue-100">
                <span className="text-[#232345] font-bold">250,000+</span> Students enrolled last year!
              </p>
            </div>
          </div>

          {/* Right Column: Image (with fade-up animation) */}
          <div className={`flex items-center justify-center transition-all duration-1000 ease-out transform
            ${showImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <img
              src="https://i.postimg.cc/Wp5tPzgf/Design-sans-titre-15.png"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="w-full max-w-[400px] md:max-w-[500px] rounded-2xl shadow-xl border-4 border-white"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
