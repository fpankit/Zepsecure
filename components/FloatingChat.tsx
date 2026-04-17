
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChat: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl shadow-blue-600/40 transform hover:scale-110 active:scale-95 transition-all group relative">
        <MessageCircle size={28} />
        {/* Pulsing Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0b0d] animate-pulse"></span>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Live AI Support
        </div>
      </button>
    </div>
  );
};

export default FloatingChat;
