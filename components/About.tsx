
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0b0d]">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/5 group">
            <img 
              src="https://picsum.photos/id/445/800/600?grayscale" 
              alt="About Zepsecure" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 border-[20px] border-white/5 m-4 pointer-events-none"></div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">About Us</p>
          <h2 className="text-6xl font-black mb-8 tracking-tight">Who We Are</h2>
          
          <div className="space-y-6 text-gray-400 leading-relaxed text-sm">
            <p>
              <span className="text-blue-500 font-bold">ZepSecure</span> is an AI-powered security project designed to explore real-time surveillance, identity verification, and smart automation. Built as an integrated system, it combines computer vision, IoT, and intelligent decision-making to enhance safety in both public and private environments.
            </p>
            <p>
              The project demonstrates features such as AI-based face detection, RFID/NFC identity access, and smart home intrusion monitoring. It focuses on creating a practical, scalable solution that showcases how modern technology can assist in proactive security systems.
            </p>
            <p>
              Developed as part of an innovation-driven initiative, <span className="text-white font-bold">ZepSecure</span> represents a step toward smarter, faster, and more efficient security ecosystems.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">5+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Core Modules</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">Real-Time</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">AI Detection</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white">Multi-System</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
