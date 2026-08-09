import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { user, todayTask } from "../data/mockData";   // no extension needed, Vite resolves .jsx
import StreakGrid from './StreakGrid'

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
  }

  // Apply dark class to root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const progress = Math.round((user.completedDays / user.totalDays) * 100)
  const isZeroStreak = user.streak === 0

  // Handle dismissals (local state)
  const [showBioWarning, setShowBioWarning] = useState(user.profileEmpty)
  const [showFreezeWarning, setShowFreezeWarning] = useState(user.streakFreeze && user.missedDays.includes(8))

  return (
    <div className="space-y-5 dark:bg-gray-900 dark:text-white transition-colors duration-200">
      {/* Header with Night Mode toggle */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hey, {user.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Day {user.currentDay} of 60</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Streak Display (huge) */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-center text-white shadow-lg">
        <div className="text-5xl font-extrabold">{isZeroStreak ? '🔥 0' : user.streak}</div>
        <div className="text-sm uppercase tracking-wider mt-1">
          {isZeroStreak ? 'First Day – Start your streak!' : 'Day Streak'}
        </div>
      </div>

      {/* Warning: Empty Bio */}
      {showBioWarning && (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-xl p-3 flex justify-between items-start">
          <div className="flex-1">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">⚠️ Your profile is empty. Fill it to get noticed by recruiters!</p>
          </div>
          <button
            onClick={() => setShowBioWarning(false)}
            className="text-yellow-600 dark:text-yellow-400 text-sm font-medium ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Warning: Streak Freeze (Day 8 missed) */}
      {showFreezeWarning && (
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-3 flex justify-between items-start">
          <div className="flex-1">
            <p className="text-sm text-blue-800 dark:text-blue-200">🧊 <strong>Streak Freeze!</strong> You missed Day 8, but your streak is protected! Get back on track today.</p>
          </div>
          <button
            onClick={() => setShowFreezeWarning(false)}
            className="text-blue-600 dark:text-blue-400 text-sm font-medium ml-2"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Today's Task */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition-colors">
        <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Today's Task</h3>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{todayTask.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{todayTask.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {todayTask.techStack.map(tag => (
            <span key={tag} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to="/day/12"
          className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition"
        >
          Start Task →
        </Link>
      </div>

      {/* Progress Bar (animated) */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition-colors">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Overall Progress</span>
          <span>{user.completedDays}/{user.totalDays} days</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-1 overflow-hidden">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-right text-xs text-gray-400 mt-0.5">{progress}%</div>
      </div>

      {/* Streak Grid (60 boxes) */}
      <StreakGrid />

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition-colors">
        <h3 className="font-semibold text-gray-800 dark:text-white">🏅 Achievements</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {user.achievements.map((ach, i) => (
            <li key={i} className="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs px-3 py-1 rounded-full">
              {ach}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 py-2">
        ABTalks — For any issue or enquiry: team@abtalks.in
      </div>
    </div>
  )
}

export default Dashboard