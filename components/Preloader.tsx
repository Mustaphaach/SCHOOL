// components/Preloader.tsx
import React from 'react';

const Preloader: React.FC = () => (
  <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
    <img
      src="https://i.postimg.cc/vHqK4gPt/283300626-112024138180001-5740127300020984464-n-removebg-preview.png" // or your external URL
      alt="Arabic Language Centre Logo Preloader"
      className="h-32 w-auto preloader-zoom"
      style={{ maxWidth: '260px' }}
    />
  </div>
);

export default Preloader;
