import React, { useEffect, useState } from "react";

const MEMBERSHIP_IMAGES = [
  {
    src: "https://i.postimg.cc/bJ9vFN9w/542539575-18014829554774835-2378215993563996621-n.jpg",
    alt: "IALC Member Certificate"
  },
  {
    src: "https://i.postimg.cc/gjQ3HbF3/485718433-666707692708556-2939613185057382133-n.jpg",
    alt: "Membership Recognition Event"
  },
  {
    src: "https://i.postimg.cc/3JLRyQQN/485415093-666842379361754-3794323096259454522-n.jpg",
    alt: "Language Centre Milestone"
  }
];

function getDisplayIndexes(current: number, total: number) {
  return [
    current,                    // Main image (large)
    (current + 1) % total,      // Medium image 
    (current + 2) % total       // Small image
  ];
}

const Membership: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(idx => (idx + 1) % MEMBERSHIP_IMAGES.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const ids = getDisplayIndexes(current, MEMBERSHIP_IMAGES.length);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#2b2b5c]">
            Speak Arabic with Confidence <span className="text-[#4d7abb]">From Zero to Conversation!</span> with Manarat AlOfoq
          </h2>
          
          {/* 3D Curved Carousel */}
          <div className="my-12 relative flex justify-center items-center h-[400px]">
            {/* Main Image (Large, Left) */}
            <div className="absolute left-0 z-30">
              <div className="relative bg-white p-4 rounded-3xl shadow-xl border-4 border-lime-400/20">
                <img
                  src={MEMBERSHIP_IMAGES[ids[0]].src}
                  alt={MEMBERSHIP_IMAGES[ids[0]].alt}
                  className="rounded-2xl w-[320px] h-[380px] object-cover shadow-md transition-all duration-1000 ease-in-out"
                />
                <div className="absolute -top-3 -right-3 bg-[#4d7abb] text-white rounded-full px-4 py-2 font-bold text-xs shadow-lg uppercase">
                  Certified
                </div>
              </div>
            </div>

            {/* Medium Image (Center-Right) */}
            <div className="absolute left-[45%] top-8 z-20">
              <div className="relative bg-white p-3 rounded-2xl shadow-lg border-2 border-blue-100 transform rotate-3">
                <img
                  src={MEMBERSHIP_IMAGES[ids[1]].src}
                  alt={MEMBERSHIP_IMAGES[ids[1]].alt}
                  className="rounded-xl w-[180px] h-[220px] object-cover shadow-sm transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>

            {/* Small Image (Far Right) */}
            <div className="absolute right-0 top-16 z-10">
              <div className="relative bg-white p-2 rounded-xl shadow-md border border-gray-200 transform rotate-6 opacity-75">
                <img
                  src={MEMBERSHIP_IMAGES[ids[2]].src}
                  alt={MEMBERSHIP_IMAGES[ids[2]].alt}
                  className="rounded-lg w-[120px] h-[150px] object-cover transition-all duration-1000 ease-in-out"
                />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover our new Spoken Arabic Course for complete beginners. Learn step by step, build real-life speaking skills, and start communicating from your very first lesson.
            </p>
          </div>

          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-[#2b2b5c] to-[#4d7abb] hover:from-[#4d7abb] hover:to-[#2b2b5c] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
          >
            Start with Us Now
          </a>

          {/* Credibility Badges */}
          <div className="mt-10 flex justify-center items-center gap-8 flex-wrap text-[#2b2b5c] font-semibold">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#4d7abb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              International Standards
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#4d7abb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Quality Assured
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#4d7abb]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Globally Recognized
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
