import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockData } from '../data/mockdata'; // <-- Keep this ONE line
import { Flame, Target, Trophy, Moon, Sun } from 'lucide-react';

const Dashboard = () => {
  // --- State ---
  const [showBioWarning, setShowBioWarning] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // --- Data from Mock ---
  const { user, challengeStats, todayTask, daysTimeline } = mockData;
  const missedDay = daysTimeline.find(d => d.status === 'missed');
  const isStreakZero = challengeStats.currentStreak === 0;
  const progress = Math.round((challengeStats.totalDaysCompleted / challengeStats.totalGoalDays) * 100);

  // --- Achievements Mock ---
  const achievements = [
    { title: "7-Day Streak", unlocked: true },
    { title: "First Project", unlocked: true },
    { title: "10 LinkedIn Posts", unlocked: false },
    { title: "25-Day Streak", unlocked: false }
  ];

  // --- Theme Toggle Logic ---
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex flex-col gap-5 pb-8">
      {/* 1. Header with Avatar & Night Mode Toggle */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hey, {user.name} 👋</h1>
          <p className="text-xs text-gray-500 dark:text-white/50">Day {challengeStats.totalDaysCompleted + 1} of 60</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-sm hover:shadow-md transition-all text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>
          <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-cyan-400/50 bg-gray-200 dark:bg-black" />
        </div>
      </div>

      {/* 2. Edge Case: Empty Bio Warning (Dismissable) */}
      {!user.bio && showBioWarning && (
        <div className="flex justify-between items-center p-3 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-500/40 rounded-xl text-yellow-800 dark:text-yellow-200 text-xs">
          <span className="flex items-center gap-2">⚠️ Your profile is empty. Fill it to get noticed by recruiters!</span>
          <button onClick={() => setShowBioWarning(false)} className="underline opacity-70 hover:opacity-100">Dismiss</button>
        </div>
      )}

      {/* 3. Edge Case: Missed Day Banner */}
      {missedDay && (
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 border border-blue-500/40 rounded-xl text-blue-800 dark:text-blue-200 text-xs flex items-center gap-2">
          <span className="text-lg">🧊</span>
          <span><strong>Streak Freeze!</strong> You missed Day {missedDay.day}, but your streak is protected! Get back on track today.</span>
        </div>
      )}

      {/* 4. Current Streak (Handles Zero Streak) */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-5 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="relative z-10">
          <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
          <div className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            {isStreakZero ? "0" : challengeStats.currentStreak}
          </div>
          <div className="text-xs font-medium text-cyan-500 dark:text-cyan-300 uppercase tracking-wider">Day Streak</div>
          {/* Edge Case: First Day message */}
          {isStreakZero && <div className="mt-2 text-[10px] text-gray-500 dark:text-white/50">This is your first day! Let's go!</div>}
        </div>
      </div>

      {/* 5. Today's Task Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5 text-cyan-500 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Target className="w-3 h-3" /> Today's Task
          </div>
        </div>
        <div className="font-bold text-base text-gray-900 dark:text-white mb-0.5">{todayTask.title}</div>
        <div className="text-[11px] text-gray-500 dark:text-white/50 line-clamp-2">{todayTask.description}</div>
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {todayTask.techStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 bg-white/10 rounded-full text-[10px] text-gray-700 dark:text-white/70">{tech}</span>
          ))}
        </div>
        <Link to="/day/12" className="block w-full mt-4 py-2.5 text-center text-sm font-bold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 active:scale-95 transition-all">
          Start Task →
        </Link>
      </div>

      {/* 6. Progress Bar (Smoothly Animated) */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-white/60 mb-1">
          <span>60-Day Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-black/20 dark:bg-black/40 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* 7. Achievements */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex items-center gap-1.5 text-cyan-500 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Trophy className="w-3 h-3" /> Achievements
        </div>
        <div className="flex flex-wrap gap-2">
          {achievements.map((ach, i) => (
            <div key={i} className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border ${ach.unlocked ? 'bg-amber-400/10 border-amber-400/30 text-amber-600 dark:text-amber-300' : 'bg-white/5 border-white/10 text-gray-400 dark:text-white/30'}`}>
              {ach.unlocked ? <span className="text-[10px]">🏆</span> : <span className="text-[10px]">🔒</span>}
              <span className="text-[10px] font-medium">{ach.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;