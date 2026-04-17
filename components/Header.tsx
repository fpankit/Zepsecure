
import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, Youtube, Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-[#0a0b0d] border-b border-white/5 py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-end items-center gap-8 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-blue-500" />
            <span>+91 85273 47648</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-500" />
            <span>Gurugram, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-blue-500" />
            <span>ankitop987@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="text-blue-500 w-10 h-10" />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter leading-none">ZEPSECURE</h1>
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em]">Security AI Systems</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            {['Services', 'About us', 'Technology', 'Testimonials', 'Contacts'].map((item, idx) => (
              <li key={item} className="group flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors">
                <span className="text-blue-500 opacity-60">0{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Facebook size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Instagram size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Youtube size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
