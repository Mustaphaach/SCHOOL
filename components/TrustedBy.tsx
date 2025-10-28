import React from 'react';

const COMPANY_LOGOS = [
  { src: "https://i.postimg.cc/LYhY2r3s/67b2ec581f2a3f6ebabe501d-Deloitte.jpg", alt: "Deloitte" },
  { src: "https://i.postimg.cc/G8NB2qX7/67b2ec581f2a3f6ebabe5041-Dubai-Chamber.jpg", alt: "Dubai Chamber" },
  { src: "https://i.postimg.cc/14kn17gL/67b2ec5831cfbfcc2f9fee77-Emirates.jpg", alt: "Emirates" },
  { src: "https://i.postimg.cc/nMjj5fzH/67b2ec5889b1e7dac9a4aa82-Dubai-Health.jpg", alt: "Dubai Health" },
  { src: "https://i.postimg.cc/bStZ2kMc/67b2ec58b192f4effdb58af1-Carrefour.jpg", alt: "Carrefour" },
  { src: "https://i.postimg.cc/p9s5N2zP/67b2ec58b786085eb05d0bbe-DFSA.jpg", alt: "DFSA" },
  { src: "https://i.postimg.cc/grXX5b0V/67b2ec58d6bd59e80e09a8a2-Dubai-Civil-Aviation.jpg", alt: "Dubai Civil Aviation" },
  { src: "https://i.postimg.cc/S2j2kwfc/67b2ec58f350670d7e831a52-DEWA.jpg", alt: "DEWA" },
  { src: "https://i.postimg.cc/2bJq6200/67b2ec58f350670d7e831a68-British-Embassy.jpg", alt: "British Embassy" },
  { src: "https://i.postimg.cc/zVTLzwKp/67b2ec5931cfbfcc2f9feeec-National-Bank.jpg", alt: "National Bank" },
  { src: "https://i.postimg.cc/RNw3S1Kn/67b2ec5936e909702e724df1-Canada.jpg", alt: "Canada" },
  { src: "https://i.postimg.cc/8jLFpdMK/67b2ec59b761c69a1b1b5bd7-Majid.jpg", alt: "Majid" },
  { src: "https://i.postimg.cc/6Tk2xb27/67b2ec59b786085eb05d0c58-GEMS.jpg", alt: "GEMS" },
  { src: "https://i.postimg.cc/yWMgCpgs/67b2ec59ef7b255888cc1b62-Expo.jpg", alt: "Expo" },
];

const styles = `
@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
`;

const TrustedBy: React.FC = () => (
  <section className="py-20 bg-white overflow-x-hidden">
    <style>{styles}</style>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center mb-12 relative">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#2b2b5c] text-center leading-snug mb-4 tracking-tight"
          style={{ letterSpacing: '-0.01em' }}
        >
          Trusted by <span className="text-[#4d7abb] font-bold">7,000+</span> graduates <br />from leading companies
        </h2>
        <span className="block mt-3 h-1 w-24 bg-gradient-to-r from-[#4d7abb] via-[#4d7abb] to-[#4d7abb] rounded-full"></span>
        <span className="absolute left-1/2 -bottom-3 w-4 h-4 -translate-x-1/2 rounded-full bg-[#4d7abb] border-4 border-white"></span>
      </div>
      <div className="relative w-full mx-auto overflow-x-hidden">
        <div
          className="flex items-center gap-x-20 animate-marquee"
          style={{
            animation: "marquee-left 28s linear infinite",
            minWidth: "200%",
            width: "fit-content",
          }}
        >
          {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-20 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300 bg-white px-3 py-2 rounded-xl shadow"
              draggable={false}
              style={{ maxWidth: 180 }}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedBy;
