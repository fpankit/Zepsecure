
import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0b0d] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-blue-500 w-8 h-8" />
              <h3 className="text-xl font-black tracking-tighter">ZEPSECURE</h3>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Pioneering AI-driven security solutions for a safer world. Protecting governments and homes through next-gen cognitive technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Services</h4>
            <ul className="text-gray-500 text-xs space-y-4">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Government Solutions</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Residential AI</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Nano Robotics</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Biometric Access</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
            <ul className="text-gray-500 text-xs space-y-4">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Partnerships</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Newsletter</h4>
            <p className="text-gray-500 text-xs mb-4">Stay updated with AI security trends.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-[#1a1b21] border border-white/5 px-4 py-2 text-xs w-full focus:outline-none focus:border-blue-500/50" 
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <span>&copy; 2024 Zepsecure AI Systems. All rights reserved.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
