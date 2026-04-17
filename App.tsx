
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default App;
