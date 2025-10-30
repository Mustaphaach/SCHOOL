import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const TESTIMONIALS = [
  {
    image: "//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg",
    name: "Fatima",
    quote: "Great institute! The teachers are patient and friendly, and the environment is very welcoming. I’ve improved a lot in reading, writing, and speaking Arabic. Highly recommend it!",
    rating: 5,
  },
  {
    image: "https://i.postimg.cc/ydBjdm20/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.jpg",
    name: "Sara",
    quote: "I joined this institute in Dubai three months ago, and it’s been an amazing experience. The teachers are supportive, and I’ve made great progress in Arabic!",
    rating: 4,
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg",
    name: "Ahmed",
    quote: "I’ve been learning Arabic here for a few months, and the progress is incredible. The teachers make every lesson clear, engaging, and enjoyable!",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<any>(null);

  // Auto-loop effect
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [current]);

  // 3D pop effect on main image
  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 800);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-[#2b2b5c] text-center mb-4 relative w-full flex flex-col items-center">
          What Clients Say
          <span className="block mt-4 h-1 w-32 bg-[#4d7abb] rounded-full"></span>
        </h2>
        <div className="relative flex justify-center items-center w-full max-w-3xl mx-auto mt-10">
          {/* Main content card */}
          <div className="bg-gradient-to-br from-[#f4f8fb] via-white to-[#e9f0fa] rounded-2xl shadow-2xl px-8 py-10 w-full max-w-xl flex flex-col items-center text-center relative z-10">
            <div className="flex flex-col items-center">
              <div
                className="transition-all duration-700"
                style={{
                  transform: animating
                    ? "scale(1.22) rotateY(7deg) rotateZ(-4deg) translateZ(0)"
                    : "scale(1.0) rotateY(0deg) rotateZ(0deg)",
                  boxShadow: animating
                    ? "0 12px 54px 0 #4d7abb66, 0 2px 16px #4d7abb44"
                    : "0 8px 24px #4d7abb22",
                  zIndex: 10,
                  borderRadius: "9999px",
                }}
              >
                <img
                  src={TESTIMONIALS[current].image}
                  alt={TESTIMONIALS[current].name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#4d7abb]"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#2b2b5c] mb-1">{TESTIMONIALS[current].name}</h3>
              <div className="flex items-center justify-center mb-4">
                {[...Array(TESTIMONIALS[current].rating)].map((_, i) =>
                  <span key={i} className="mx-0.5"><FaStar color="#4d7abb" /></span>
                )}
              </div>
              <blockquote className="italic text-xl text-[#232345] font-medium bg-white rounded-lg px-6 py-4 shadow transition">
                “{TESTIMONIALS[current].quote}”
              </blockquote>
            </div>
          </div>
          {/* Overlapped vertical avatars (right, 50% overlap) - DESKTOP ONLY */}
          <div className="hidden md:flex flex-col items-center absolute right-[-70px] top-1/2 -translate-y-1/2 z-20">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`appearance-none 
                  ${current === idx ? "border-[#4d7abb] scale-110" : "border-transparent opacity-90 hover:opacity-100"} 
                  transition mb-[-38px] border-2 focus:outline-none`}
                style={{
                  boxShadow:
                    current === idx ? "0 0 0 5px #4d7abb45" : "",
                  zIndex: current === idx ? 2 : 1,
                  borderRadius: "9999px",
                  background: "none",
                }}
                aria-label={`Show testimonial ${t.name}`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className={`w-16 h-16 rounded-full object-cover shadow-lg`}
                  style={{
                    borderRadius: "9999px",
                    transition: "all 0.2s",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
