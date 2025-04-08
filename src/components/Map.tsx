
import React from 'react';

const Map = () => {
  return (
    <div className="w-full bg-gray-200 h-96">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.1427977704256!2d139.75216111525837!3d35.90494988014231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1f3b5e4d93f%3A0x4ea354ee3a1e456c!2s1-chōme-51-14%20Chūō%2C%20Kasukabe%2C%20Saitama%20344-0067!5e0!3m2!1sen!2sjp!4v1598123456789!5m2!1sen!2sjp" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
