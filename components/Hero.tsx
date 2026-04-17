
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="w-24 h-px bg-blue-500 mb-8"></div>
          <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Zepsecure: The Future of Cognitive Security
          </p>
          <h2 className="text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
            AI Powered <br />
            <span className="text-blue-500">Protection.</span>
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest px-8 py-4 rounded transition-all transform active:scale-95 shadow-lg shadow-blue-600/20">
              Government Portal
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest px-8 py-4 rounded transition-all transform active:scale-95">
              Residential Setup
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12">
            {[
              { num: '01', title: 'Bodycams', desc: 'AI facial recognition for on-field law enforcement.' },
              { num: '02', title: 'ANPR', desc: 'High-speed plate recognition for smart cities.' },
              { num: '03', title: 'Nano Bots', desc: 'Tactical drones and micro-bots for reconnaissance.' },
              { num: '04', title: 'Smart Home', desc: 'Face entry and automated biometric locks.' }
            ].map((feature) => (
              <div key={feature.num} className="group">
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase mb-2 tracking-widest">
                  <span className="text-blue-500">{feature.num}.</span>
                  <span>{feature.title}</span>
                </h4>
                <p className="text-gray-500 text-[11px] leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
