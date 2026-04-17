
import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Sterling",
    role: "Commissioner, Security Dept.",
    text: "The integration of Zepsecure's ANPR systems reduced our city traffic violation response time by 40%. The AI accuracy is unmatched.",
    date: "March 12, 2024",
    image: "https://picsum.photos/id/64/200/200?grayscale"
  },
  {
    name: "Helena Vance",
    role: "Homeowner, Private Estate",
    text: "Switching to Zepsecure's Face Entry was the best decision for my estate. It's completely touchless and works flawlessly in low light.",
    date: "January 08, 2024",
    image: "https://picsum.photos/id/65/200/200?grayscale"
  },
  {
    name: "Marcus Thorne",
    role: "Director of Intelligence",
    text: "The AI bodycams provide our officers with real-time threat detection that actually saves lives in high-risk deployments.",
    date: "June 17, 2024",
    image: "https://picsum.photos/id/91/200/200?grayscale"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0f1014] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/3">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Clients</p>
            <h2 className="text-6xl font-black mb-8 tracking-tight">Testimonials</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              At <span className="text-blue-500">Zepsecure</span>, we have a genuine passion for protecting people. Our technology is deployed in some of the most sensitive environments globally.
            </p>
            <p className="text-gray-500 text-xs italic">
              Though most of our high-profile clients prefer to stay incognito, we still have some great testimonials you can read here!
            </p>
          </div>

          <div className="w-full lg:w-2/3 relative">
            <div className="flex gap-8 items-center">
              <button className="p-3 bg-[#1a1b21] hover:bg-blue-600 rounded-full transition-colors hidden md:block">
                <ChevronLeft size={20} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8 flex-1">
                {testimonials.slice(1, 3).map((item, idx) => (
                  <div key={idx} className="bg-[#1a1b21] p-10 rounded-2xl flex flex-col items-center text-center relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-2">{item.name}</h4>
                    <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-6">{item.role}</p>
                    <div className="relative">
                      <Quote className="absolute -top-4 -left-4 text-blue-500/20 w-8 h-8" />
                      <p className="text-gray-400 text-sm leading-relaxed italic mb-8 relative z-10">
                        &laquo; {item.text} &raquo;
                      </p>
                    </div>
                    <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
                  </div>
                ))}
              </div>

              <button className="p-3 bg-[#1a1b21] hover:bg-blue-600 rounded-full transition-colors hidden md:block">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
