import React, { useState } from 'react';

// --- Mock Data (Simulating a real user) ---
const mockUser = {
  name: "Alex Rivera",
  avatar: "https://i.pravatar.cc/150?img=7",
  bio: "", // Intentionally empty to trigger the edge case warning
  streak: 12,
  totalDaysCompleted: 42,
  totalGoalDays: 100,
  missedYesterday: true, // Triggers "Streak Freeze" banner
  timeline: [
    { label: "Mon 03", completed: true },
    { label: "Tue 04", completed: true },
    { label: "Wed 05", completed: true },
    { label: "Thu 06", completed: false }, // A missed day
    { label: "Fri 07", completed: false }, // Another missed day
    { label: "Sat 08", completed: false, isToday: true }, // Today (pending)
    { label: "Sun 09", completed: false }, // Future
  ]
};

const Dashboard = () => {
  // --- State for Edge Cases ---
  const [showBioWarning, setShowBioWarning] = useState(true);
  
  // --- Dark Mode Toggle ---
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // --- Derived Data ---
  const progressPercentage = Math.round((mockUser.totalDaysCompleted / mockUser.totalGoalDays) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Developer Dashboard
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
              Track your daily coding impact.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300"
              aria-label="Toggle night mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
              ) : (
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
              )}
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-3">
              <img 
                src={mockUser.avatar} 
                alt="User Avatar" 
                className="w-10 h-10 rounded-full border-2 border-indigo-500 dark:border-indigo-400 bg-gray-200"
              />
              <span className="font-semibold hidden sm:block">{mockUser.name}</span>
            </div>
          </div>
        </header>

        {/* --- EDGE CASE 1: Empty Bio Warning --- */}
        {!mockUser.bio && showBioWarning && (
          <div className="flex justify-between items-center p-4 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-400 dark:border-yellow-600/50 rounded-xl text-yellow-800 dark:text-yellow-200 shadow-sm">
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
        {mockUser.missedYesterday && (
          <div className="p-4 bg-blue-100 dark:bg-blue-900/40 border border-blue-400 dark:border-blue-600/50 rounded-xl text-blue-800 dark:text-blue-200 shadow-sm flex items-center gap-3">
            <span className="text-2xl">🧊</span>
            <div>
              <span className="font-bold">Streak Freeze! </span>
              <span className="text-sm opacity-90">You missed a day yesterday, but your streak of {mockUser.streak} days is protected. Get back on track today!</span>
            </div>
          </div>
        )}

        {/* --- STATS CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Current Streak */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full -mr-12 -mt-12"></div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Current Streak</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">{mockUser.streak}</span>
                <span className="text-lg text-gray-500 dark:text-gray-400 font-medium pb-1">days</span>
              </div>
              <div className="mt-3 flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < (mockUser.streak % 7) ? 'bg-indigo-500 dark:bg-indigo-400' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Completion Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Goal Completion</p>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-3xl md:text-4xl font-black text-purple-600 dark:text-purple-400">{mockUser.totalDaysCompleted}</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">/ {mockUser.totalGoalDays} days</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-right text-xs text-gray-500 dark:text-gray-400 font-medium">{progressPercentage}% complete</p>
          </div>
        </div>

        {/* --- 7-DAY TIMELINE --- */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">7-Day Activity Timeline</h2>
            <span className="text-xs text-gray-400 dark:text-gray-500">*Today's progress pending</span>
          </div>
          
          <div className="flex justify-between gap-2 md:gap-4">
            {mockUser.timeline.map((day, index) => {
              // Determine status styles
              let statusStyles = "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600";
              let icon = <span className="text-lg">-</span>;
              if (day.completed) {
                statusStyles = "bg-green-100 dark:bg-green-900/40 border-green-400 dark:border-green-600 text-green-700 dark:text-green-300";
                icon = <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>;
              } else if (day.isToday) {
                statusStyles = "bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-300";
                icon = <div className="w-5 h-5 mx-auto border-2 border-current border-dashed rounded-full animate-spin-slow"></div>;
              } else {
                // Missed day
                statusStyles = "bg-red-100 dark:bg-red-900/40 border-red-400 dark:border-red-600 text-red-600 dark:text-red-300";
                icon = <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>;
              }

              return (
                <div key={index} className={`flex flex-col items-center flex-1 p-3 rounded-xl border ${statusStyles} transition-all shadow-sm`}>
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-1">{day.label.split(' ')[0]}</span>
                  <span className="text-[10px] md:text-xs font-medium opacity-70 mb-2">{day.label.split(' ')[1]}</span>
                  <div className="h-6 flex items-center justify-center">
                    {icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;