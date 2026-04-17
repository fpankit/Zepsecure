
import React from 'react';
import { Camera, Search, UserCheck, Bot, Cpu, Fingerprint } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera size={48} className="text-white mb-6" />,
      title: "AI Powered Bodycams",
      description: "Advanced wearable units with edge AI for real-time threat detection and situational awareness for government personnel.",
      level: "Government"
    },
    {
      icon: <Search size={48} className="text-white mb-6" />,
      title: "ANPR Systems",
      description: "High-speed Automatic Number Plate Recognition featuring deep-learning analysis for municipal and national surveillance.",
      level: "Government"
    },
    {
      icon: <UserCheck size={48} className="text-white mb-6" />,
      title: "Face Recognition",
      description: "Law enforcement grade facial analysis. I will use my face for integrated biometric authentication across all levels.",
      level: "Government & Home"
    },
    {
      icon: <Bot size={48} className="text-white mb-6" />,
      title: "Nano Security Bots",
      description: "Autonomous, non-intrusive robotics for tactical reconnaissance and interior security patrolling in high-risk zones.",
      level: "Government & Home"
    },
    {
      icon: <Cpu size={48} className="text-white mb-6" />,
      title: "Smart Home Automation",
      description: "Intelligent residential ecosystems that autonomously manage climate, lighting, and security based on inhabitant behavior.",
      level: "Home",
      link: "https://studio-zeta-two-90.vercel.app/login"
    },
    {
      icon: <Fingerprint size={48} className="text-white mb-6" />,
      title: "Biometric Entry",
      description: "Multi-modal authentication systems featuring 3D face entry and encrypted biometric door locking mechanisms.",
      level: "Home",
      link: "https://card-tap-2r63.vercel.app/"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0b0d]">
      <div className="container mx-auto px-6">
        {/* Header Section from Image */}
        <div className="mb-16">
          <p className="text-gray-500 text-lg font-bold mb-2">What We Do</p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Our Practice Areas
          </h2>
        </div>

        {/* Grid Layout from Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const CardContent = (
              <div 
                className="bg-[#16171d] p-12 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col h-full cursor-pointer"
              >
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                
                <h3 className="text-[#3b82f6] text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
                    {service.level} Level
                  </span>
                  <button className="text-blue-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.link ? 'Launch Terminal' : 'Learn More'} &rarr;
                  </button>
                </div>
              </div>
            );

            return service.link ? (
              <a 
                key={index} 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
