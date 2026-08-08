export const mockData = {
  user: {
    id: "u_123",
    name: "Arjun",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "", // Edge Case: Empty Profile
    college: "VIT Vellore"
  },
  challengeStats: {
    currentStreak: 11,
    totalDaysCompleted: 11,
    totalGoalDays: 60,
    progressPercentage: 18
  },
  // 60-day array perfectly matching your requirements
  daysTimeline: Array.from({ length: 60 }, (_, i) => {
    const day = i + 1;
    let status = "upcoming";
    if (day >= 1 && day <= 7) status = "completed";
    if (day === 8) status = "missed"; // Edge Case: Missed Day
    if (day >= 9 && day <= 11) status = "completed";
    if (day === 12) status = "current"; // Edge Case: Day 12 available
    return { day, status };
  }),
  todayTask: {
    id: 12,
    title: "Build a Global State Manager",
    description: "Create a simple global state manager using React Context and useReducer to manage complex app states without prop drilling.",
    techStack: ["React", "Context API", "useReducer"],
    exampleLink: "https://github.com/abtalks/examples/day12"
  }
};