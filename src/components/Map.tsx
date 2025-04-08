
import React from 'react';

const Map = () => {
  return (
    <div className="w-full bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-custom-green text-5xl font-bold mb-2 text-center">Access</h2>
          <p className="text-custom-green text-center mb-8">アクセス</p>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                  alt="施設周辺の公園" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 h-full rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">交通アクセス</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>東武アーバンパークライン「春日部駅」より徒歩10分</li>
                  <li>駐車場有り（3台）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.1427977704256!2d139.75216111525837!3d35.90494988014231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1f3b5e4d93f%3A0x4ea354ee3a1e456c!2s1-chōme-51-14%20Chūō%2C%20Kasukabe%2C%20Saitama%20344-0067!5e0!3m2!1sen!2sjp!4v1598123456789!5m2!1sen!2sjp" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
