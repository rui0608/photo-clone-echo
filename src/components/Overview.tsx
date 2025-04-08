
import React from 'react';

const Overview = () => {
  return (
    <div className="bg-white">
      <div className="bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="h-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 0)' }}></div>
          </div>
        </div>
      </div>
      
      <div className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-custom-green text-5xl font-bold mb-2">Over View</h2>
          <p className="text-custom-green">施設概要</p>
        </div>
        
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">施設名</th>
                  <td className="py-4">デイサービスセンター エンタメかずかべ</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">住所</th>
                  <td className="py-4">〒344-0067<br />埼玉県春日部市中央1丁目 51-14</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">定員</th>
                  <td className="py-4">日程より</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">営業時間</th>
                  <td className="py-4">8：30～17：30</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">休業時間</th>
                  <td className="py-4">8：30～16：30</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">事業所番号</th>
                  <td className="py-4">埼玉県指定 (エスケープ)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">TEL</th>
                  <td className="py-4">048-753-8109</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 w-1/4 text-left font-normal">FAX</th>
                  <td className="py-4">048-753-8148</td>
                </tr>
                <tr>
                  <th className="py-4 w-1/4 text-left font-normal">理念</th>
                  <td className="py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-gray-200 h-64">
              <img 
                src="/lovable-uploads/12812240-8c55-4a9c-91be-9310d83615ee.png" 
                alt="公園の遊具" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
