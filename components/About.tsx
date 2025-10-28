import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const journeySteps = [
  {
    year: "1980",
    title: "Foundation",
    description:
      "Maliha Wehbe established the Arabic Language Centre at Dubai World Trade Centre, introducing an innovative conversational method that changed language education in the Gulf.",
    image: "https://picsum.photos/id/1011/400/200",
  },
  {
    year: "1995-2005",
    title: "Innovation",
    description:
      "ALC pioneered immersive roleplay, real-life materials, and practical sessions, empowering students to start speaking Arabic from the first class.",
    image: "https://picsum.photos/id/1027/400/200",
  },
  {
    year: "2000s",
    title: "Impact",
    description:
      "Over 7,000 graduates—including diplomats, business leaders, and families—began using Arabic confidently, thanks to our unique curriculum.",
    image: "https://picsum.photos/id/1035/400/200",
  },
  {
    year: "Today",
    title: "Digital Evolution",
    description:
      "Fadeel and Georges Wehbe—the second and third generation—carry the legacy forward, blending traditional immersion with digital tools and mentoring for modern learners.",
    image: "https://picsum.photos/id/1043/400/200",
  },
];

const About = () => {
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    journeySteps.forEach((_, idx) => {
      // Animation directions alternate by index
      const textDirection = idx % 2 === 0 ? 80 : -80;
      const imageDirection = idx % 2 === 0 ? -80 : 80;

      if (textRefs.current[idx]) {
        gsap.fromTo(
          textRefs.current[idx],
          { opacity: 0, x: textDirection },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: idx * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRefs.current[idx],
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      if (imageRefs.current[idx]) {
        gsap.fromTo(
          imageRefs.current[idx],
          { opacity: 0, x: imageDirection },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: idx * 0.2 + 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRefs.current[idx],
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== Intro Section (can be customized) ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-[#2b2b5c] mb-6">A Timeless Family Legacy in Arabic Education</h2>
            <div className="bg-gray-100 rounded-xl shadow p-8 mb-10">
              <p className="text-lg text-gray-800 mb-4">
                As featured in <a href="#" className="text-[#2b2b5c] font-semibold underline">Khaleej Times</a>,
                our journey began in 1980 when Maliha Wehbe founded the Arabic Language Centre (ALC), bringing Dubai a new way to learn real-world Arabic.
              </p>
              <ul className="mb-4 pl-5 list-disc text-[#232345] font-semibold">
                <li>Radical simplicity in grammar and structure</li>
                <li>Cultural immersion with real-life materials</li>
                <li>Conversational practice from day one</li>
                <li>Family warmth & multi-generational expertise</li>
              </ul>
              <p className="text-gray-800 mb-6">
                Her son Fadeel and grandson Georges ensure her legacy expands through innovative programs, welcoming beginners and advanced learners alike.
              </p>
              <a
                href="#cta"
                className="inline-block bg-[#2b2b5c] hover:bg-[#232345] text-white font-bold py-3 px-7 rounded-full shadow transition-colors duration-300"
              >
                Explore Our Programmes
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#2b2b5c] rounded-lg p-5 flex flex-col items-start shadow text-white">
                <span className="text-2xl font-bold mb-2">Immersive</span>
                <span className="text-sm">Daily life materials, real situations, fast results.</span>
              </div>
              <div className="bg-[#232345] rounded-lg p-5 flex flex-col items-start shadow text-white">
                <span className="text-2xl font-bold mb-2">Cultural</span>
                <span className="text-sm">Learn the humor, values, and stories behind the language.</span>
              </div>
              <div className="bg-lime-400 text-[#232345] rounded-lg p-5 flex flex-col items-start shadow font-semibold">
                <span className="text-2xl font-bold mb-2">Proven Impact</span>
                <span className="text-sm">7,000+ graduates, 45 years, UAE’s education leader.</span>
              </div>
              <div className="bg-gray-200 rounded-lg p-5 flex flex-col items-start shadow text-[#2b2b5c]">
                <span className="text-2xl font-bold mb-2">Personal</span>
                <span className="text-sm">Beginner-friendly and supportive, every step of your journey.</span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="https://picsum.photos/seed/legacy/600/450"
                alt="Family Legacy"
                className="rounded-2xl shadow-lg w-full mb-6 border-8 border-[#2b2b5c] object-cover"
              />
              <div className="absolute -bottom-10 right-6 bg-white border border-blue-100 rounded-2xl w-40 h-16 flex items-center justify-center shadow-lg">
                <img
                  src="https://i.postimg.cc/7LH2SYvs/khaleejtimes-logo.png"
                  alt="Khaleej Times"
                  className="opacity-80 w-32 h-auto"
                />
              </div>
              <div className="absolute top-4 left-4 bg-lime-400 shadow rounded-full px-4 py-2 font-bold text-[#2b2b5c] text-sm border border-[#232345]">
                Featured Legacy
              </div>
            </div>
          </div>
        </div>
        {/* ========== Journey Timeline ========== */}
        <div className="mt-20 max-w-5xl mx-auto" id="journey">
          <h3 className="text-2xl font-bold text-[#2b2b5c] mb-8 text-center">Our Journey</h3>
          <div className="space-y-12">
            {journeySteps.map((step, idx) => (
              <div
                key={step.year}
                className={`flex flex-col md:flex-row items-center gap-8 bg-gray-50 rounded-xl shadow-lg p-8 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  ref={el => textRefs.current[idx] = el}
                  className="flex-1 mb-6 md:mb-0 text-left"
                >
                  <span className="inline-block bg-lime-400 text-[#232345] font-bold rounded-full px-4 py-2 mb-2">
                    {step.year} — {step.title}
                  </span>
                  <div className="text-lg text-[#232345] font-semibold mb-2">{step.description}</div>
                </div>
                <div
                  ref={el => imageRefs.current[idx] = el}
                  className="flex-shrink-0 w-full md:w-64"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-xl border-4 border-[#2b2b5c] object-cover w-full h-40 md:h-48"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ========== CTA Panel ========== */}
        <div className="mt-20 max-w-3xl mx-auto bg-[#2b2b5c] shadow-xl rounded-2xl px-8 py-10 flex flex-col items-center justify-center text-center" id="cta">
          <h4 className="text-3xl font-bold text-white mb-3">Become Part of Our Legacy</h4>
          <p className="text-lg text-blue-100 mb-6">
            Whether you’re a professional, a parent, or a complete beginner—discover how the <span className="text-lime-400 font-bold">Maliha Wehbe Method</span> can help you connect, communicate, and thrive in Arabic.
          </p>
          <a
            href="/contact"
            className="bg-lime-400 hover:bg-lime-500 text-[#2b2b5c] font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-colors duration-300"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
