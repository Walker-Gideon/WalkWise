export const aiEncouragements = {
  // 1. BRAND NEW USER MESSAGES
  newUser: {
    welcome: () => ({
      quote: "Welcome to WalkWise! The secret of getting ahead is getting started. Create your first flashcard deck or write a quick note to begin.",
      author: "WalkWise AI"
    }),
    firstCardNudge: () => ({
      quote: "I notice you are set up! Let's create your first flashcard deck today to activate your memory flame.",
      author: "WalkWise AI"
    })
  },

  // 2. ACTIVE PROGRESS & FOCUS MESSAGES
  milestones: {
    streak: (streakCount) => ({
      quote: `You have kept your learning flame burning for ${streakCount} ${streakCount === 1 ? 'day' : 'days'} straight! Let's keep the fire alive today.`,
      author: "WalkWise AI"
    }),
    mastery: (masteryCount) => ({
      quote: `Incredible concentration! You have fully mastered ${masteryCount} ${masteryCount === 1 ? 'card' : 'cards'} (100% recall). Your memory is getting sharper every day!`,
      author: "WalkWise AI"
    }),
    cardsCreated: (totalCards) => ({
      quote: `You have built a personal library of ${totalCards} flashcards. Each card is a stepping stone to mastery!`,
      author: "WalkWise AI"
    }),
    notesCreated: (totalNotes) => ({
      quote: `You have written ${totalNotes} study notes. Summarizing concepts in your own words is a memory superpower!`,
      author: "WalkWise AI"
    }),
    focusTimeToday: (minutes) => ({
      quote: `You have clocked ${minutes} minutes of deep focus time today. Your dedication is absolutely top-tier!`,
      author: "WalkWise AI"
    })
  },

  // 3. SESSIONS COMPLETED (Today, Weekly, Monthly)
  sessions: {
    today: (sessionsCount) => ({
      quote: `Fantastic job! You completed ${sessionsCount} scheduled study ${sessionsCount === 1 ? 'session' : 'sessions'} today. Consistency is how champions are made.`,
      author: "WalkWise AI"
    }),
    weekly: (sessionsCount) => ({
      quote: `You've conquered ${sessionsCount} study sessions this week! WalkWise AI is extremely proud of your steady progress.`,
      author: "WalkWise AI"
    }),
    monthly: (sessionsCount) => ({
      quote: `A stellar month! You've completed ${sessionsCount} study sessions over the last 30 days. You are forming an unbreakable learning habit!`,
      author: "WalkWise AI"
    })
  },

  // 4. SMART TIME-OF-DAY FALLBACKS
  timeOfDay: {
    morning: () => ({
      quote: "Good morning! A quick 5-minute review session right now will prime your brain and boost retention for the rest of the day.",
      author: "WalkWise AI"
    }),
    afternoon: () => ({
      quote: "Taking a quick study break in the afternoon is a fantastic way to reset your focus. Keep up the momentum!",
      author: "WalkWise AI"
    }),
    evening: () => ({
      quote: "Reviewing flashcards shortly before bed is scientifically proven to improve sleep-learning consolidation. End your day strong!",
      author: "WalkWise AI"
    })
  }
};
