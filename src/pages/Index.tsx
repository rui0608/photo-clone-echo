
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Schedule from '@/components/Schedule';
import Overview from '@/components/Overview';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Schedule />
      <Overview />
      <Map />
      <Footer />
    </div>
  );
};

export default Index;
