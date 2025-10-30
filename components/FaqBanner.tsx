
import React from 'react';
import { Link } from 'react-router-dom';

const FaqBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#2b2b5c] to-[#fdf2e9] to-[#4d7abb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Have questions or need more details about our Arabic courses? Our team is here to help you get started.
        </h2>
        <div className="mt-8">
          <Link
  to="/contact"
  className="inline-block bg-gradient-to-r from-[#2b2b5c] to-[#4d7abb] hover:from-[#4d7abb] hover:to-[#2b2b5c] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
>
  Contact
</Link>
        </div>
      </div>
    </section>
  );
};

export default FaqBanner;
