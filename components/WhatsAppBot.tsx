import React, { useState, useRef, useEffect } from 'react';

const WHATSAPP_NUMBER = "971500000000"; // Change to owner's WhatsApp number

const ICON_IMG = "https://i.postimg.cc/vHqK4gPt/283300626-112024138180001-5740127300020984464-n-removebg-preview.png";

const WhatsAppBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isZooming, setIsZooming] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleIconClick = () => {
    setIsZooming(true);
    setTimeout(() => {
      setIsZooming(false);
      setOpen(true);
    }, 170); // Zoom duration
  };

  const handleSend = () => {
    if (!message.trim()) return;
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setMessage('');
  };

  return (
    <div>
      {/* WhatsApp floating icon with zoom-in animation */}
      {!open && (
        <button
          onClick={handleIconClick}
          className={`fixed bottom-8 right-8 z-50
            bg-white 
            rounded-full
            shadow-xl 
            border border-gray-100
            flex items-center justify-center
            transition-transform duration-200
            ${isZooming ? 'scale-110' : 'scale-100'}
            hover:scale-105`}
          style={{
            boxShadow: "0 4px 28px 0 #232345",
            width: '78px',
            height: '78px',
          }}
          aria-label="Open WhatsApp message form"
        >
          <img
            src={ICON_IMG}
            alt="WhatsApp"
            className="w-11 h-11"
            style={{
              display: 'block',
              margin: 'auto'
            }}
          />
        </button>
      )}

      {/* Popup form */}
      {open && (
        <div
          ref={popupRef}
          className="fixed bottom-32 right-8 z-50 bg-white w-[340px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col items-center py-8 px-7 animate-fade-in transition duration-300"
        >
          <img src={ICON_IMG} alt="WhatsApp" className="w-12 h-12 mb-3" />
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full border rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:ring mb-5"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-[#232345] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-base shadow transition"
            disabled={!message.trim()}
          >
            Send message
          </button>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
            aria-label="Close WhatsApp form"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default WhatsAppBot;
