import { user } from '../data/mockData'   // adjust path if different

const StreakGrid = () => {
  const totalDays = 60
  const completed = new Set(user.completedDaysList || [])
  const missed = new Set(user.missedDays || [])
  const current = user.currentDay

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800 dark:text-white">60-Day Progress</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {Math.round((user.completedDays / totalDays) * 100)}%
        </span>
      </div>
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1
          let bg = 'bg-gray-200 dark:bg-gray-700' // default (not started)
          if (missed.has(day)) bg = 'bg-red-400 dark:bg-red-600'
          else if (completed.has(day)) bg = 'bg-green-500 dark:bg-green-600'
          if (day === current) bg = 'bg-blue-500 dark:bg-blue-600' // current day (overrides)

          return (
            <div
              key={day}
              className={`h-8 rounded-md flex items-center justify-center text-xs text-white font-medium ${bg}`}
              title={`Day ${day}`}
            >
              {day}
            </div>
          )
        })}
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
        <span>🔥 Streak: {user.streak} days</span>
        <span>✅ {user.completedDays} / 60</span>
      </div>
    </div>
  )
}

export default StreakGrid