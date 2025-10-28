import React from 'react';

const Corporate: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Right Column: Text Content */}
        <div className="lg:order-2">
          <h2 className="text-4xl font-extrabold text-[#2b2b5c] mb-6">Corporate Language Solutions</h2>
          <div className="bg-gray-50 rounded-xl shadow p-8 mb-8">
            <p className="text-lg text-[#232345] mb-6">
              We empower teams in healthcare, banking, aviation, hospitality, and more to speak, write, and connect in Arabic and English. Whether you need staff onboarding, specialty workshops, or leadership seminars—ALC delivers highly flexible, immersive courses tailored to your sector and objectives.
            </p>
            <ul className="pl-5 list-disc text-[#2b2b5c] font-semibold mb-6">
              <li>Hospital, Banking & Aviation solution tracks</li>
              <li>Industry-driven Arabic, Business English</li>
              <li>Onsite or digital, 1:1 and group formats</li>
              <li>Certification and cultural integration</li>
            </ul>
            <a
              href="#benefits"
              className="inline-block bg-[#2b2b5c] hover:bg-[#232345] text-white font-bold py-3 px-7 rounded-full shadow transition-colors duration-300"
            >
              Explore Courses
            </a>
          </div>
        </div>
        
        {/* Left Column: Image Visual */}
        <div className="lg:order-1 flex flex-col items-center">
          <img
            src="https://picsum.photos/seed/corporate/600/450"
            alt="Corporate Training"
            className="rounded-2xl shadow-lg w-full mb-6 border-8 border-[#2b2b5c] object-cover"
          />
          <span className="bg-lime-400 text-[#232345] px-5 py-2 rounded-full font-semibold text-md shadow">
            Trusted by leading UAE employers
          </span>
        </div>
      </div>
      
      {/* Benefits Row */}
      <div className="mb-20" id="benefits">
        <h3 className="text-2xl font-bold text-[#2b2b5c] mb-8 text-center">Why Choose ALC for Your Organization?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-xl shadow-md p-8 text-center">
            <div className="mb-4">
              <svg className="w-9 h-9 mx-auto text-lime-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 11c1.1046 0 2-.89543 2-2s-.8954-2-2-2-2 .89543-2 2 .8954 2 2 2z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8v7a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8"/>
              </svg>
            </div>
            <h4 className="font-bold text-[#232345] mb-2">Tailored Curriculum</h4>
            <span className="text-[#232345]">Programs designed for each sector—healthcare, finance, engineering & more.</span>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-8 text-center">
            <div className="mb-4">
              <svg className="w-9 h-9 mx-auto text-lime-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h4 className="font-bold text-[#232345] mb-2">Practical Outcomes</h4>
            <span className="text-[#232345]">Staff achieve confident speaking, writing, and cultural competency for real-world use.</span>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-8 text-center">
            <div className="mb-4">
              <svg className="w-9 h-9 mx-auto text-lime-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10.5v4a2 2 0 0 1-4 0v-4m2-2h.01"/>
              </svg>
            </div>
            <h4 className="font-bold text-[#232345] mb-2">Flexible Delivery</h4>
            <span className="text-[#232345]">Onsite training, remote classes, and hybrid solutions for all team sizes.</span>
          </div>
        </div>
      </div>

      {/* Mini Testimonials Block */}
      <div className="mb-20 max-w-3xl mx-auto text-center">
        <h3 className="text-lg font-bold text-[#2b2b5c] mb-4">What Clients Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <blockquote className="bg-[#f7fafc] rounded-xl shadow p-5 text-[#232345] font-medium">
            “ALC’s corporate Arabic course helped our staff build confidence working with patients and their families!”
            <span className="block mt-2 text-xs text-gray-400">— Amira, Hospital HR</span>
          </blockquote>
          <blockquote className="bg-[#f7fafc] rounded-xl shadow p-5 text-[#232345] font-medium">
            “The business English sessions were interactive, and the trainer adapted material for our industry.”
            <span className="block mt-2 text-xs text-gray-400">— Ahmed, Bank Manager</span>
          </blockquote>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-2xl mx-auto bg-[#2b2b5c] shadow-xl rounded-2xl px-8 py-10 flex flex-col items-center justify-center text-center">
        <h4 className="text-2xl font-bold text-white mb-3">Bring Powerful Language Skills to Your Team</h4>
        <p className="text-md text-blue-100 mb-6">
          Get in touch for a custom proposal and organizational demo. Unlock smoother operations and higher customer satisfaction with ALC’s certified programs.
        </p>
        <a
          href="/contact"
          className="bg-lime-400 hover:bg-lime-500 text-[#2b2b5c] font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-colors duration-300"
        >
          Request Demo
        </a>
      </div>
    </div>
  </section>
);

export default Corporate;
