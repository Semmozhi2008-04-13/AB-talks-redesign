import React, { useState } from 'react';
import NeonCard from './NeonCard';
import { mockData } from '../data/mockData'; // Import the JSON data here

const Dashboard = () => {
  // --- State & Edge Cases ---
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showBioWarning, setShowBioWarning] = useState(true);
  const { user, challengeStats, daysTimeline } = mockData; // Destructure the imported data

  // --- Derive Data from JSON ---
  const currentStreak = challengeStats.currentStreak;
  const daysCompleted = challengeStats.totalDaysCompleted;
  const daysGoal = challengeStats.totalGoalDays;
  const progress = Math.round((daysCompleted / daysGoal) * 100);

  // Check if Day 8 was missed to trigger the freeze banner
  const missedDay = daysTimeline.find(day => day.day === 8)?.status === 'missed';

  // --- Transform 60-day data into 7-day UI Timeline ---
  // Find the index of the 'current' day
  const currentIndex = daysTimeline.findIndex(day => day.status === 'current');
  
  // Slice out 7 days: 3 days before, the current day, and 3 days after
  let displayTimeline = [];
  if (currentIndex !== -1) {
    const start = Math.max(0, currentIndex - 3);
    const end = Math.min(daysTimeline.length, currentIndex + 4);
    const slicedDays = daysTimeline.slice(start, end);

    // Format the sliced data to match your existing CSS classes
    displayTimeline = slicedDays.map(item => ({
      label: `Day ${item.day}`,
      date: item.day.toString().padStart(2, '0'),
      completed: item.status === 'completed',
      isToday: item.status === 'current'
    }));
  }

  // --- Theme Toggle Logic ---
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex flex-col w-full pt-8">
      {/* --- Dashboard Header --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Track your daily coding impact and consistency.
          </p>
        </div>

        {/* Night Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-full shadow hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 font-medium"
        >
          {isDarkMode ? (
            <>
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
              <span>Day Mode</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
              <span>Night Mode</span>
            </>
          )}
        </button>
      </div>

      {/* --- EDGE CASE 1: Empty Bio Warning --- */}
      {!user.bio && showBioWarning && (
        <div className="flex justify-between items-center p-4 mb-8 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-400 dark:border-yellow-600/50 rounded-xl text-yellow-800 dark:text-yellow-200 shadow-sm">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
            <span className="text-sm font-medium">Your bio is empty. Add one to help employers find you!</span>
          </div>
          <button 
            onClick={() => setShowBioWarning(false)}
            className="text-yellow-700 dark:text-yellow-300 hover:text-yellow-900 dark:hover:text-yellow-100 text-sm font-medium underline decoration-2 underline-offset-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* --- EDGE CASE 2: Streak Freeze Banner --- */}
      {missedDay && (
        <div className="p-4 mb-8 bg-blue-100 dark:bg-blue-900/30 border border-blue-400 dark:border-blue-600/50 rounded-xl text-blue-800 dark:text-blue-200 shadow-sm flex items-center gap-4">
          <span className="text-2xl">🧊</span>
          <div>
            <span className="font-bold">Streak Freeze! </span>
            <span className="text-sm opacity-90">You missed Day 8, but your streak is protected. Get back on track today!</span>
          </div>
        </div>
      )}

      {/* --- STATS CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Current Streak */}
        <NeonCard className="text-left" borderColor="border-cyan-500/20">
          <div className="relative z-10">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Current Streak</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl md:text-5xl font-black text-cyan-500 dark:text-cyan-300">{currentStreak}</span>
              <span className="text-lg text-gray-500 dark:text-gray-400 font-medium pb-1">days</span>
            </div>
            <div className="mt-3 flex gap-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i < (currentStreak % 7) ? 'bg-cyan-400' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
              ))}
            </div>
          </div>
        </NeonCard>

        {/* Completion Progress */}
        <NeonCard className="text-left" borderColor="border-purple-500/30">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Goal Completion</p>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-3xl md:text-4xl font-black text-purple-500 dark:text-purple-400">{daysCompleted}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">/ {daysGoal} days</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-xs text-gray-500 dark:text-gray-400 font-medium">{progress}% complete</p>
        </NeonCard>
      </div>

      {/* --- 7-DAY TIMELINE (Now derived from the 60-day JSON) --- */}
      <NeonCard className="text-left" borderColor="border-white/10 dark:border-white/10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">7-Day Timeline</h2>
          <span className="text-xs text-gray-400 dark:text-gray-500">*Current day pending</span>
        </div>
        
        <div className="flex justify-between gap-2 md:gap-4">
          {displayTimeline.map((day, index) => {
            let statusColor = "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600";
            let icon = <span className="text-lg">-</span>;

            if (day.completed) {
              statusColor = "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-500 text-green-600 dark:text-green-300";
              icon = <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>;
            } else if (day.isToday) {
              statusColor = "bg-cyan-50 dark:bg-cyan-900/20 border-2 border-cyan-400 text-cyan-500 dark:text-cyan-300";
              icon = <div className="w-4 h-4 mx-auto border-2 border-current border-dashed rounded-full animate-spin-slow"></div>;
            } else if (!day.completed && !day.isToday) {
              statusColor = "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-500 text-red-500 dark:text-red-300";
              icon = <svg className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>;
            }

            return (
              <div key={index} className={`flex flex-col items-center flex-1 p-2 rounded-lg border ${statusColor} transition-all shadow-sm`}>
                <span className="text-[10px] font-bold uppercase tracking-wider mb-0.5">{day.label}</span>
                <span className="text-[10px] font-medium opacity-70 mb-1">{day.date}</span>
                <div className="h-5 flex items-center justify-center">
                  {icon}
                </div>
              </div>
            );
          })}
        </div>
      </NeonCard>
    </div>
  );
};

export default Dashboard;