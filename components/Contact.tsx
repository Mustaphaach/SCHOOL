import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => (
  <section>
    {/* HERO */}
    <div className="w-full min-h-56 bg-gradient-to-r from-blue-900 to-blue-600 relative flex flex-col justify-center">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: 'url("/image.jpg") center/cover no-repeat', // Replace with your image or leave as brand blue
        }}
      />
      <div className="relative container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Get in Touch</h1>
        <p className="text-white opacity-90 max-w-2xl">
          Get in touch with us today to explore our range of tailored Arabic and English courses, learn more about our 45-year legacy of innovative teaching, and discover how our team can help you achieve lasting fluency and confidence.
        </p>
      </div>
    </div>

    {/* CONTACT FORM & INFO */}
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row p-8 gap-8 md:gap-0 md:divide-x">
        {/* FORM */}
        <form className="w-full md:w-7/12 flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none bg-gray-50" placeholder="Your name" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none bg-gray-50" placeholder="you@email.com" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Area of Residence</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none bg-gray-50" placeholder="Area" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">What are you interested in?</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none bg-gray-50" placeholder="I'm interested in..." />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-1">Phone</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none bg-gray-50" placeholder="+971 XX XXX XXXX" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Leave us a message</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none bg-gray-50" placeholder="Please type your message here..." />
          </div>
          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-500 text-[#232345] font-bold py-3 px-8 rounded-full mt-2 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* DETAILS */}
        <div className="w-full md:w-5/12 flex flex-col px-0 md:px-8 pt-8 md:pt-0">
          <h3 className="font-extrabold text-lg text-gray-700 mb-3">Contact details</h3>
          <p className="text-gray-600 text-sm mb-4">
            Our team will get back to you as soon as possible with step-by-step guidance.
          </p>
          <div className="mb-2">
            <span className="font-semibold text-gray-800">Email</span> <br />
            <a href="mailto:info@arabiclanguagencentre.com" className="text-blue-600 hover:underline">info@arabiclanguagencentre.com</a>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-800">Phone</span><br />
            <a href="tel:+97143315600" className="text-blue-600 hover:underline">+971 4 331 5600</a>
          </div>
          <div className="mt-8 mb-2 font-semibold text-gray-800">Follow us on social media</div>
          <div className="flex gap-3 text-blue-600 text-lg">
            <a href="#" className="hover:text-blue-900"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-900"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-900"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>

    {/* MAP */}
    <div className="w-full px-0 pb-8">
      <iframe
        src="https://www.google.com/maps?q=The+Arabic+Language+Centre+Dubai&output=embed"
        className="w-full h-96 rounded-2xl border-0"
        title="Arabic Language Centre Location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default Contact;
