import React from 'react';
import Layout from './Layout';
import NeonCard from './NeonCard';

const LandingPage = () => {
  return (
    <Layout>
      <div className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl text-white">
          Turn Your GitHub Code <br /> into a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Thriving LinkedIn Career
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Join the community that bridges the gap between open-source contributions and professional networking.
        </p>
        <div className="flex justify-center">
          <button className="px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            Start Building Your Legacy
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;