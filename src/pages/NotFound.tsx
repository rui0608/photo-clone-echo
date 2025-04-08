
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-custom-green">404</h1>
          <p className="text-xl text-gray-600 mb-4">ページが見つかりません</p>
          <a href="/" className="text-custom-green hover:underline">
            ホームページに戻る
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
