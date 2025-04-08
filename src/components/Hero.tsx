
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-96 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f56c1ab2-b068-4701-a9d1-3d6cce9a41ac.png" 
          alt="ヒーロー画像" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">
          デイサービスセンター エンタメかずかべ
        </h1>
      </div>
    </div>
  );
};

export default Hero;
