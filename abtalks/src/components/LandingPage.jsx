import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NeonCard from './NeonCard';

const LandingPage = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "1. Connect GitHub",
      desc: "Securely sync your repositories and contribution graph. We analyze your best code, not just your commit messages."
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.603V7.646c0-1.094-.787-2.036-1.872-2.18-2.087-.277-4.216-.42-6.378-.42s-4.291.143-6.378.42c-1.085.144-1.872 1.086-1.872 2.18v4.9c0 .616.272 1.195.75 1.604m16.5 0a2.18 2.18 0 01-.75 1.604m-15 0a2.18 2.18 0 01-.75-1.604m15 0v2.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-2.25m15 0H4.5m15 0v-.75c0-1.094-.787-2.036-1.872-2.18-2.087-.277-4.216.42-6.378.42s-4.291.143-6.378.42c-1.085.144-1.872 1.086-1.872 2.18v.75" />
        </svg>
      ),
      title: "2. Build Your Portfolio",
      desc: "Our AI highlights your most impressive work. Instantly create an auto-updating developer portfolio."
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "3. Automate Your Reach",
      desc: "Whenever you push a meaningful project, we generate a compelling LinkedIn post to get your talent noticed."
    }
  ];

  return (
    <div className="flex flex-col w-full pt-8">
      {/* --- Hero Section --- */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-xl text-gray-900 dark:text-white">
          Turn Your GitHub Code <br /> into a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Thriving LinkedIn Career
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Join the community that bridges the gap between open-source contributions and professional networking.
        </p>
        
        {/* --- CTA Button (Navigates to Dashboard) --- */}
        <div className="flex justify-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
          >
            Start Building Your Legacy
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- Trust Metrics & Community --- */}
      <div className="mb-20">
        <NeonCard className="text-center" borderColor="border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-4">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white drop-shadow-lg">5k+</span>
              <span className="text-cyan-500 dark:text-cyan-300 font-medium text-sm uppercase tracking-wider mt-1">Students Enrolled</span>
            </div>
            <div className="w-px h-12 bg-black/10 dark:bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white drop-shadow-lg">97%</span>
              <span className="text-cyan-500 dark:text-cyan-300 font-medium text-sm uppercase tracking-wider mt-1">Consistency Rate</span>
            </div>
            
            {/* Community Avatars */}
            <div className="flex flex-col items-center mt-4 md:mt-0 border-t md:border-t-0 md:border-l border-black/10 dark:border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-auto">
              <div className="flex items-center -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-cyan-600 bg-gray-200 dark:bg-black" src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-cyan-600 bg-gray-200 dark:bg-black" src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-cyan-600 bg-gray-200 dark:bg-black" src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
                <img className="w-12 h-12 rounded-full border-2 border-cyan-600 bg-gray-200 dark:bg-black" src="https://i.pravatar.cc/150?img=4" alt="Avatar" />
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 bg-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-600 dark:text-amber-300 shadow-lg backdrop-blur-sm">
                  +4k
                </div>
              </div>
              <span className="text-gray-500 dark:text-white/50 text-xs font-medium mt-3 tracking-wide flex items-center gap-1">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 text-cyan-400"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                Join 5k+ developers building their careers
              </span>
            </div>
          </div>
        </NeonCard>
      </div>

      {/* --- 3-Step Workflow --- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-lg">Your 3-Step Workflow</h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4 shadow-[0_0_10px_rgba(0,255,204,0.3)]"></div>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl mx-auto text-sm">Stop writing update posts. Let your actual code build your network.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {steps.map((step, index) => (
          <NeonCard key={index} className="flex flex-col items-center text-center hover:border-cyan-400/50 transition-all duration-300" borderColor="border-white/10 dark:border-white/10">
            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-200/50 dark:bg-black/60 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 mb-6 shadow-[0_0_20px_rgba(0,255,204,0.1)]">
              {step.icon}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-[10px] text-black font-bold flex items-center justify-center rounded-full">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">{step.desc}</p>
          </NeonCard>
        ))}
      </div>

      {/* --- Social Proof --- */}
      <div className="mb-16">
        <NeonCard borderColor="border-purple-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                “
              </div>
              <div>
                <p className="text-gray-700 dark:text-white font-light italic text-sm md:text-base max-w-lg">
                  "I went from 0 commits to a full-stack role in 6 months. abtalks made my work visible and got me 10+ recruiter DMs."
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-bold text-cyan-500 dark:text-cyan-300">Sarah Jenkins</span>
                  <span className="text-[10px] text-gray-300 dark:text-white/30">•</span>
                  <span className="text-xs text-gray-400 dark:text-white/40">Software Engineer @ UseLagom</span>
                </div>
              </div>
            </div>
            <Link to="/dashboard">
              <button className="flex-shrink-0 bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-300 font-medium px-6 py-2 rounded-full hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 group">
                Read success stories <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
              </button>
            </Link>
          </div>
        </NeonCard>
      </div>
    </div>
  );
};

export default LandingPage;