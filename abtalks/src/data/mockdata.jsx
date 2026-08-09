export const user = {
  name: "Arjun",
  streak: 12,
  totalDays: 60,
  completedDays: 11,
  currentDay: 12,
  bio: "",
  achievements: ["7-Day Streak", "First Project", "10 LinkedIn Posts", "25-Day Streak"],
  completedDaysList: [1,2,3,4,5,6,7,9,10,11],
  missedDays: [8],
  streakFreeze: true,
  profileEmpty: true,
  submissions: [
    { day: 1, github: "https://github.com/abtalks/day1", linkedin: "https://linkedin.com/posts/day1" },
    { day: 2, github: "https://github.com/abtalks/day2", linkedin: "https://linkedin.com/posts/day2" },
  ]
}

export const todayTask = {
  title: "Build a Global State Manager",
  description: "Create a simple global state manager using React Context and useReducer to manage complex app states without prop drilling.",
  techStack: ["React", "Context API", "useReducer"],
  day: 12
}

// 🟢 CHANGED: Renamed from 'challengeDays' to 'challengeData'
export const challengeData = {
  12: {
    ...todayTask,
    github: "https://github.com/abtalks/day12",
    linkedin: "https://linkedin.com/posts/day12"
  }
}

export const leaderboard = [
  { name: "Priya Sharma", streak: 45 },
  { name: "Amit Kumar", streak: 32 },
  { name: "Arjun Singh", streak: 12 },
  { name: "Sneha Reddy", streak: 27 },
]

// 🟢 Updated to use 'challengeData'
export const mockData = {
  user,
  todayTask,
  challengeData,
  leaderboard
}