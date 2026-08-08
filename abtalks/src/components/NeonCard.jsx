import React from 'react';

const NeonCard = ({ children, className = "", borderColor = "border-purple-500/40" }) => {
  return (
    <div className={`w-full p-8 bg-black/40 backdrop-blur-md border ${borderColor} rounded-2xl shadow-lg relative group transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeonCard;