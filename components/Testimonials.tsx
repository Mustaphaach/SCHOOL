import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    image: "//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg",
    name: "Lisa Redfern",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
  },
  {
    image: "https://i.postimg.cc/ydBjdm20/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.jpg",
    name: "Cassi",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 4,
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg",
    name: "Md Nahidul",
    quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
  },
];

const getPrevIdx = (idx: number, arr: any[]) => (idx === 0 ? arr.length - 1 : idx - 1);
const getNextIdx = (idx: number, arr: any[]) => (idx === arr.length - 1 ? 0 : idx + 1);

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(getPrevIdx(current, TESTIMONIALS));
  const next = () => setCurrent(getNextIdx(current, TESTIMONIALS));

  useEffect(() => {
    const interval = setInterval(() => next(), 6000);
    return () => clearInterval(interval);
  }, [current]);

  const prevThumb = TESTIMONIALS[getPrevIdx(current, TESTIMONIALS)];
  const nextThumb = TESTIMONIALS[getNextIdx(current, TESTIMONIALS)];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-semibold text-[#2b2b5c] text-center mb-12 relative w-full flex flex-col items-center">
          What Clients Say
          <span className="block mt-4 h-1 w-32 bg-[#4d7abb] rounded-full"></span>
          <span className="absolute left-1/2 -bottom-3 w-4 h-4 -translate-x-1/2 rounded-full bg-[#4d7abb] border-4 border-white"></span>
        </h2>

        <div className="relative max-w-2xl mx-auto flex flex-col items-center">
          {/* Main Feedback */}
          <div className="feedback-slider-item relative py-12 px-3 flex flex-col items-center text-center transition-all duration-700 shadow-lg bg-gray-50 rounded-2xl mb-12 mt-10">
            <img src={TESTIMONIALS[current].image} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-6" alt="Customer" />
            <h3 className="customer-name text-xl font-bold mb-3 text-[#2b2b5c]">{TESTIMONIALS[current].name}</h3>
            <p className="text-gray-700 mb-6">{TESTIMONIALS[current].quote}</p>
            <span className="customer-rating bg-gray-200 border-4 border-white text-[#2b2b5c] font-extrabold absolute right-8 top-16 shadow-lg w-12 h-12 flex items-center justify-center rounded-full text-lg">
              {TESTIMONIALS[current].rating}
              <span className="ml-1 inline-flex"><FaStar color="#4d7abb" size={18} /></span>
            </span>
          </div>
          {/* Side thumbs */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button className="thumb-prev flex flex-col items-center group" onClick={prev}>
              <span className="block w-16 h-16 bg-white rounded-full shadow hover:opacity-80 overflow-hidden mb-1 border-2 border-lime-200">
                <img src={prevThumb.image} alt={prevThumb.name} className="w-full h-full object-cover rounded-full" />
              </span>
              <span className="customer-rating bg-gray-200 border-2 border-white text-[#2b2b5c] inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold">
                {prevThumb.rating}
                <span className="ml-1 inline-flex"><FaStar color="#4d7abb" size={14} /></span>
              </span>
              <span className="mt-2"><FaChevronLeft color="#232345" size={22} /></span>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button className="thumb-next flex flex-col items-center group" onClick={next}>
              <span className="block w-16 h-16 bg-white rounded-full shadow hover:opacity-80 overflow-hidden mb-1 border-2 border-lime-200">
                <img src={nextThumb.image} alt={nextThumb.name} className="w-full h-full object-cover rounded-full" />
              </span>
              <span className="customer-rating bg-gray-200 border-2 border-white text-[#2b2b5c] inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold">
                {nextThumb.rating}
                <span className="ml-1 inline-flex"><FaStar color="#4d7abb" size={14} /></span>
              </span>
              <span className="mt-2"><FaChevronRight color="#232345" size={22} /></span>
            </button>
          </div>
          {/* Navigation dots */}
          <div className="flex justify-center items-center mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                className={`mx-1 w-4 h-4 rounded-full border border-lime-400 ${current === idx ? 'bg-[#4d7abb]' : 'bg-gray-200 hover:bg-lime-200'}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
