
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f56c1ab2-b068-4701-a9d1-3d6cce9a41ac.png" 
                alt="タレタメロゴ" 
                className="h-12" 
              />
            </div>
            <p className="text-sm mt-4">株式会社タレタメ</p>
            <p className="text-sm mt-1">〒344-2313 埼玉県春日部市中央1丁目 51-14</p>
            <p className="text-sm mt-1">TEL：0480-53-8360</p>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
              <div>
                <h4 className="text-xs mb-4 border-b border-gray-700 pb-1">HOME</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/" className="hover:text-custom-green">ホーム</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs mb-4 border-b border-gray-700 pb-1">施設について</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/" className="hover:text-custom-green">どんな場所？</Link></li>
                  <li><Link to="/" className="hover:text-custom-green">こんなことお願い</Link></li>
                  <li><Link to="/" className="hover:text-custom-green">職員インタビュー</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs mb-4 border-b border-gray-700 pb-1">施設・アクセス</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link to="/" className="hover:text-custom-green">施設写真</Link></li>
                  <li><Link to="/" className="hover:text-custom-green">お問い合わせ</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs">
          <p>© 2021 株式会社タレタメ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
