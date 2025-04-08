
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top navigation */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f56c1ab2-b068-4701-a9d1-3d6cce9a41ac.png" 
              alt="タレタメロゴ" 
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-custom-green rounded-md py-1 px-3 text-white text-sm">
              公式サイト
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-custom-green mr-1" />
                <span className="text-lg font-bold">0480-53-8360</span>
              </div>
              <div className="bg-custom-green rounded-full p-1 text-white text-xs w-16 text-center">
                contact
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="py-3">
          <ul className="flex justify-center space-x-6 text-sm">
            <li><Link to="/" className="hover:text-custom-green">HOME</Link></li>
            <li><Link to="/" className="hover:text-custom-green">どんな場所？</Link></li>
            <li><Link to="/" className="hover:text-custom-green">こんなことお願い</Link></li>
            <li><Link to="/" className="hover:text-custom-green">職員インタビュー</Link></li>
            <li><Link to="/" className="hover:text-custom-green">施設写真</Link></li>
            <li><Link to="/" className="hover:text-custom-green">概要・アクセス</Link></li>
            <li><Link to="/" className="hover:text-custom-green">アクセビリティ</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
