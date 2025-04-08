
import React from 'react';

const Features = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 relative">
          {/* Left content section with text */}
          <div className="w-full">
            <p className="text-sm mb-10">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。
            </p>
            
            <h2 className="text-custom-green text-5xl font-bold mb-2">Features</h2>
            <p className="text-custom-green mb-12">施設の特徴</p>
            
            {/* Card grid - now spans full width */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="bg-white p-4">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                    alt="公園の遊具" 
                    className="h-32 w-full object-cover" 
                  />
                </div>
                <h3 className="font-bold mb-4">特色をがはいります</h3>
                <p className="text-black text-xs">
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                    alt="公園の遊具" 
                    className="h-32 w-full object-cover" 
                  />
                </div>
                <h3 className="font-bold mb-4">特色をがはいります</h3>
                <p className="text-black text-xs">
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </p>
              </div>
              
              <div className="bg-white p-4">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                    alt="公園の遊具" 
                    className="h-32 w-full object-cover" 
                  />
                </div>
                <h3 className="font-bold mb-4">特色をがはいります</h3>
                <p className="text-black text-xs">
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </p>
              </div>
            </div>
          </div>
          
          {/* Right logo image - now positioned absolute to allow overlap */}
          <div className="w-full md:w-2/5 md:absolute md:right-0 md:top-0">
            <div className="relative h-full">
              <img 
                src="/lovable-uploads/db776b49-fd7b-401b-b770-13002fa2523d.png" 
                alt="鶴のロゴ" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
