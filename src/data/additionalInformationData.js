import {
  LuRepeat,
  LuChartLine,
  LuMessageSquare,
  LuMessageSquareText,
} from "react-icons/lu";
import cardImage from "/src/assets/card.png";
import dashboardImage from "/src/assets/dashboard.png";
import inspireImage from "/src/assets/inspire.png";
import chatImage from "/src/assets/chat&note.png";

const additionaInformationData = [
  {
    icon: LuRepeat,
    title: "Review with Spaced-Repetition Flashcards",
    subtitle: "Strengthen memory through proven recall techniques.",
    points: [
      "Practice smarter, not harder — revisit only what needs reinforcement.",
      "Boost long-term memory retention with spaced intervals.",
      "Save time with focused, personalized card reviews.",
    ],
    url: cardImage,
    color: "bg-yellow-500",
  },
  {
    icon: LuChartLine,
    title: " Track Your Consistency & Daily Progress",
    subtitle: "Stay motivated and organized with visual progress insights.",
    points: [
      "Visual dashboards show your learning streak and improvement.",
      "Daily reminders help maintain a study routine.",
      "Progress tracking builds a sense of achievement and momentum.",
    ],
    url: dashboardImage,
    color: "bg-green-500",
  },
  {
    icon: LuMessageSquare,
    title: "Get Motivation, Tips, and Reminders",
    subtitle: "Keep going with study hacks, encouragement, and nudges.",
    points: [
      "Receive bite-sized motivational quotes during your study breaks.",
      "Smart tips are tailored to your learning behavior.",
      "Gentle reminders keep you on track without pressure.",
    ],
    url: inspireImage,
    color: "bg-orange-500",
  },
  {
    icon: LuMessageSquareText,
    title: " AI Support When You’re Stuck",
    subtitle:
      "Get help instantly with answers and explanations tailored to you.",
    points: [
      "Ask questions and get simplified, context-aware responses.",
      "Clarify complex topics on demand.",
      "Get study suggestions based on your weak spots.",
    ],
    url: chatImage,
    color: "bg-pink-500",
  },
];

export default additionaInformationData;
