
import React from 'react';
import { Card, CardContent } from "./ui/card";

const Features = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Right logo image positioned as background */}
          <div className="absolute right-0 top-0 w-2/5 h-full z-0 hidden md:block">
            <img 
              src="/lovable-uploads/db776b49-fd7b-401b-b770-13002fa2523d.png" 
              alt="鶴のロゴ" 
              className="w-full h-full object-contain opacity-90" 
            />
          </div>
          
          {/* Main content with higher z-index */}
          <div className="relative z-10">
            {/* Heading section */}
            <h2 className="text-custom-green text-6xl font-bold mb-2">Features</h2>
            <p className="text-custom-green text-xl mb-16">施設の特徴</p>
            
            {/* Card grid - three white cards with images and text */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col">
                <Card className="bg-white rounded-lg overflow-hidden mb-4">
                  <div className="w-full">
                    <img 
                      src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                      alt="特色1" 
                      className="w-full h-56 object-cover" 
                    />
                  </div>
                </Card>
                <h3 className="text-white text-xl font-bold mb-4">特色名がはいります</h3>
                <p className="text-white text-sm">
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="flex flex-col">
                <Card className="bg-white rounded-lg overflow-hidden mb-4">
                  <div className="w-full">
                    <img 
                      src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                      alt="特色2" 
                      className="w-full h-56 object-cover" 
                    />
                  </div>
                </Card>
                <h3 className="text-white text-xl font-bold mb-4">特色名がはいります</h3>
                <p className="text-white text-sm">
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="flex flex-col">
                <Card className="bg-white rounded-lg overflow-hidden mb-4">
                  <div className="w-full">
                    <img 
                      src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                      alt="特色3" 
                      className="w-full h-56 object-cover" 
                    />
                  </div>
                </Card>
                <h3 className="text-white text-xl font-bold mb-4">特色名がはいります</h3>
                <p className="text-white text-sm">
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                  テキストがはいります。テキストがはいります。テキストがはいります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
