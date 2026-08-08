import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Rocket, Users, TrendingUp, Calendar, MessageSquare, Sparkles, Link as LinkIcon, Zap, Globe, Bot } from 'lucide-react';

// Added 'onClose' prop here
const OnboardingPoster = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // --- Timer Logic ---
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- Modal Display Logic ---
  useEffect(() => {
    const hasSeenPoster = localStorage.getItem('abtalks_poster_seen');
    const timer = setTimeout(() => {
      if (!hasSeenPoster) setIsOpen(true);
    }, 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('abtalks_poster_seen', 'true');
    if (onClose) onClose(); // <-- Tells the parent page to start the animation
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl transition-opacity duration-300">
      <div className="relative w-full max-w-[390px] md:max-w-[500px] bg-slate-900/80 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh] backdrop-blur-md">
        
        {/* Close Button */}
        <button onClick={handleClose} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/70 transition-all flex items-center justify-center">
          <X className="w-4 h-4" />
        </button>

        {/* --- Header Badge & Title --- */}
        <div className="flex flex-col items-center text-center mt-2 mb-6">
          <div className="px-4 py-1 bg-[#1e1b4b] rounded-full text-[10px] font-semibold text-purple-400 mb-3 flex items-center gap-1.5">
            🚀 60-DAY CHALLENGE
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
            Become AI-Ready <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              in 60 Days
            </span>
          </h1>
          <p className="text-[12px] text-white/50 leading-relaxed mt-3 max-w-[300px] md:max-w-[420px]">
            A structured journey to master Claude AI, build real projects and future-proof your career.
          </p>
        </div>

        {/* --- Stats & Timer Box --- */}
        <div className="bg-[#1e293b]/80 backdrop-blur-sm rounded-2xl p-4 border border-white/5 mb-6 grid grid-cols-2 gap-2">
          {/* Left: Stats */}
          <div className="flex flex-col gap-4 border-r border-white/5 pr-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-900/40 flex items-center justify-center text-indigo-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm md:text-base font-bold text-white">1,284+</div>
                <div className="text-[9px] text-white/40 font-medium">builders joined</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-900/40 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm md:text-base font-bold text-white">324</div>
                <div className="text-[9px] text-white/40 font-medium">completed today.</div>
              </div>
            </div>
          </div>

          {/* Right: Timer */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-1 text-[9px] text-white/40 font-medium mb-1">
              <Calendar className="w-3 h-3" /> Challenge starts in
            </div>
            <div className="flex justify-center gap-1.5 text-base md:text-lg font-bold font-digital text-white">
              <span className="w-6 text-center">{String(timeLeft.days).padStart(2, '0')}</span>:
              <span className="w-6 text-center">{String(timeLeft.hours).padStart(2, '0')}</span>:
              <span className="w-6 text-center">{String(timeLeft.minutes).padStart(2, '0')}</span>:
              <span className="w-6 text-center">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <div className="flex justify-center gap-1.5 w-full text-[8px] text-white/30 uppercase tracking-wider mt-1">
              <span className="w-6 text-center">DAYS</span>
              <span className="w-6 text-center">HOURS</span>
              <span className="w-6 text-center">MIN</span>
              <span className="w-6 text-center">SEC</span>
            </div>
          </div>
        </div>

        {/* --- What You'll Learn Section --- */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-white mb-3">
            <Sparkles className="w-4 h-4 text-purple-400" /> What you'll learn
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { icon: <MessageSquare className="w-4 h-4 text-white/80" />, title: "Prompt\nEngineering" },
              { icon: <Sparkles className="w-4 h-4 text-yellow-400" />, title: "Claude Artifacts" },
              { icon: <LinkIcon className="w-4 h-4 text-blue-400" />, title: "MCP Servers &\nConnectors" },
              { icon: <Zap className="w-4 h-4 text-orange-400" />, title: "AI Automations" },
              { icon: <Globe className="w-4 h-4 text-cyan-400" />, title: "APIs & Web Apps" },
              { icon: <Bot className="w-4 h-4 text-purple-400" />, title: "Agentic AI\nWorkflows" }
            ].map((skill, i) => (
              <div key={i} className="flex flex-row items-center gap-2 bg-[#1e293b]/80 border border-white/5 rounded-xl p-2.5 min-h-[56px] backdrop-blur-sm">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  {skill.icon}
                </div>
                <span className="text-[9px] md:text-[10px] font-medium text-white leading-tight whitespace-pre-line text-left">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Actions --- */}
        <div className="flex flex-col gap-3">
          <Link to="/dashboard" onClick={handleClose} className="w-full py-4 flex items-center justify-center gap-2 text-[15px] font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg shadow-purple-500/25">
            <Rocket className="w-4 h-4" /> Register Now
          </Link>
          <button onClick={handleClose} className="w-full py-4 text-[15px] font-medium text-white/70 bg-[#1e293b]/80 border border-white/5 rounded-xl hover:bg-[#334155] transition-all duration-200 backdrop-blur-sm">
            Maybe Later
          </button>
        </div>

        {/* --- Small Footer --- */}
        <div className="text-center mt-4 pt-3 border-t border-white/5">
          <p className="text-[10px] text-white/30">Built for Students, Developers, PMs & Analysts <span className="text-purple-400">💜</span></p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPoster;