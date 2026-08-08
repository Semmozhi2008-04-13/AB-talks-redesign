import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OnboardingPoster from './OnboardingPoster';

const LandingPage = () => {
  const location = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const hasSeenPoster = localStorage.getItem('abtalks_poster_seen');
    
    // If they've seen the poster before, show the landing page instantly
    if (hasSeenPoster === 'true') {
      setIsHeroVisible(true);
    } else {
      // If not, keep it hidden until the poster calls handlePosterClose()
      setIsHeroVisible(false);
    }
  }, [location.pathname]);

  const handlePosterClose = () => {
    setIsHeroVisible(true);
  };

  return (
    <div className="flex flex-col gap-6 pt-4 pb-8 relative">
      
      {/* Hero Section with Fade-Up Animation */}
      <div 
        className={`text-center transition-all duration-1000 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight mb-3">
          Build Your <br />
          <span className="inline-block text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer Legacy
          </span>
          <br /> in 60 Days.
        </h1>
        <p className={`text-sm text-white/60 max-w-xs mx-auto leading-relaxed transition-all duration-1000 delay-300 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Commit daily, post your journey, and get noticed by recruiters. Start your 60-day coding streak today.
        </p>
      </div>

      {/* Trust Metrics */}
      <div className={`transition-all duration-1000 delay-150 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex justify-around text-center">
          <div>
            <div className="text-2xl font-bold text-white">5k+</div>
            <div className="text-[10px] text-cyan-400 uppercase tracking-wider mt-0.5">Students</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div>
            <div className="text-2xl font-bold text-white">97%</div>
            <div className="text-[10px] text-cyan-400 uppercase tracking-wider mt-0.5">Consistency</div>
          </div>
        </div>
      </div>

      {/* 3-Step Workflow */}
      <div className={`flex flex-col gap-3 transition-all duration-1000 delay-300 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
        {[
          { 
            icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12c0-5.523-4.477-10-10-10z"/></svg>,
            title: "1. Connect GitHub",
            desc: "Push your daily code. Your contribution graph is your proof." 
          },
          { 
            icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
            title: "2. Post on LinkedIn",
            desc: "Share your build. Build a public portfolio for recruiters." 
          },
          { 
            icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>,
            title: "3. Unlock Achievements",
            desc: "Maintain your streak. Unlock badges and get noticed." 
          }
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <div className="mt-0.5 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
              {step.icon}
            </div>
            <div>
              <div className="font-bold text-sm text-white">{step.title}</div>
              <div className="text-[11px] text-white/50 leading-tight mt-0.5">{step.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Avatar Stack */}
      <div className={`flex justify-center items-center gap-3 py-2 transition-all duration-1000 delay-500 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
        <div className="flex -space-x-3">
          <img className="w-10 h-10 rounded-full border-2 border-cyan-600 bg-black" src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
          <img className="w-10 h-10 rounded-full border-2 border-cyan-600 bg-black" src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
          <img className="w-10 h-10 rounded-full border-2 border-cyan-600 bg-black" src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
          <div className="w-10 h-10 rounded-full border-2 border-amber-400 bg-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-300 shadow-lg backdrop-blur-sm">
            +4k
          </div>
        </div>
        <span className="text-[11px] text-white/40 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Join our community
        </span>
      </div>

      {/* Bright CTA */}
      <Link 
        to="/dashboard" 
        className={`w-full py-4 text-center font-bold text-gray-900 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(251,191,36,0.4)] mt-2 min-h-[44px] flex items-center justify-center transition-all duration-1000 delay-700 ease-out ${
          isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        Start Your 60-Day Challenge 
        <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
      </Link>

      {/* Poster Component */}
      <OnboardingPoster onClose={handlePosterClose} />
    </div>
  );
};

export default LandingPage;