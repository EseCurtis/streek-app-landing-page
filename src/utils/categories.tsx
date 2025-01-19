import {
  FaApple,
  FaBed,
  FaBolt,
  FaBook,
  FaBrain,
  FaBrain as FaBrainSolid,
  FaBroom,
  FaChalkboard,
  FaCode,
  FaGlassWhiskey,
  FaGrinBeam,
  FaHandsHelping,
  FaMobileAlt,
  FaMusic,
  FaPen,
  FaPlane,
  FaPrayingHands,
  FaRunning,
  FaTree,
  FaUsers,
  FaWallet
} from "react-icons/fa";

const categories = [
  {
    value: "_def",
    label: "Plain Streak",
    icon: <FaBolt />,
    hexColor: "#db1c41", // gray-800
    colorScheme: "!bg-[#db1c41]",
    textColorScheme: "text-[#db1c41]"
  },
  {
    value: "exercise",
    label: "Exercise",
    icon: <FaRunning />,
    hexColor: "#16A34A", // green-600
    colorScheme: "!bg-[#16A34A]",
    textColorScheme: "text-[#16A34A]"
  },
  {
    value: "reading",
    label: "Reading",
    icon: <FaBook />,
    hexColor: "#2563EB", // blue-600
    colorScheme: "!bg-[#2563EB]",
    textColorScheme: "text-[#2563EB]"
  },
  {
    value: "meditation",
    label: "Meditation",
    icon: <FaBrain />,
    hexColor: "#7C3AED", // purple-600
    colorScheme: "!bg-[#7C3AED]",
    textColorScheme: "text-[#7C3AED]"
  },
  {
    value: "coding",
    label: "Coding",
    icon: <FaCode />,
    hexColor: "#D97706", // yellow-600
    colorScheme: "!bg-[#D97706]",
    textColorScheme: "text-[#D97706]"
  },
  {
    value: "water-intake",
    label: "Water Intake",
    icon: <FaGlassWhiskey />,
    hexColor: "#0D9488", // teal-600
    colorScheme: "!bg-[#0D9488]",
    textColorScheme: "text-[#0D9488]"
  },
  {
    value: "healthy-eating",
    label: "Healthy Eating",
    icon: <FaApple />,
    hexColor: "#EA580C", // orange-600
    colorScheme: "!bg-[#EA580C]",
    textColorScheme: "text-[#EA580C]"
  },
  {
    value: "sleep",
    label: "Quality Sleep",
    icon: <FaBed />,
    hexColor: "#4338CA", // indigo-600
    colorScheme: "!bg-[#4338CA]",
    textColorScheme: "text-[#4338CA]"
  },
  {
    value: "mindfulness",
    label: "Mindfulness",
    icon: <FaBrainSolid />,
    hexColor: "#EC4899", // pink-600
    colorScheme: "!bg-[#EC4899]",
    textColorScheme: "text-[#EC4899]"
  },
  {
    value: "learning",
    label: "Continuous Learning",
    icon: <FaChalkboard />,
    hexColor: "#1E3A8A", // blue-700
    colorScheme: "!bg-[#1E3A8A]",
    textColorScheme: "text-[#1E3A8A]"
  },
  {
    value: "socialize",
    label: "Socialize",
    icon: <FaUsers />,
    hexColor: "#0891B2", // cyan-600
    colorScheme: "!bg-[#0891B2]",
    textColorScheme: "text-[#0891B2]"
  },
  {
    value: "gratitude",
    label: "Gratitude",
    icon: <FaGrinBeam />,
    hexColor: "#BE185D", // rose-600
    colorScheme: "!bg-[#BE185D]",
    textColorScheme: "text-[#BE185D]"
  },
  {
    value: "budgeting",
    label: "Budgeting",
    icon: <FaWallet />,
    hexColor: "#6B7280", // gray-700
    colorScheme: "!bg-[#6B7280]",
    textColorScheme: "text-[#6B7280]"
  },
  {
    value: "yoga",
    label: "Yoga",
    icon: <FaPrayingHands />,
    hexColor: "#C2410C", // orange-700
    colorScheme: "!bg-[#C2410C]",
    textColorScheme: "text-[#C2410C]"
  },
  {
    value: "creative-writing",
    label: "Creative Writing",
    icon: <FaPen />,
    hexColor: "#DC2626", // red-600
    colorScheme: "!bg-[#DC2626]",
    textColorScheme: "text-[#DC2626]"
  },
  {
    value: "travel",
    label: "Travel",
    icon: <FaPlane />,
    hexColor: "#B45309", // yellow-700
    colorScheme: "!bg-[#B45309]",
    textColorScheme: "text-[#B45309]"
  },
  {
    value: "cleaning",
    label: "Cleaning",
    icon: <FaBroom />,
    hexColor: "#166534", // green-700
    colorScheme: "!bg-[#166534]",
    textColorScheme: "text-[#166534]"
  },
  {
    value: "music-practice",
    label: "Music Practice",
    icon: <FaMusic />,
    hexColor: "#7C3AED", // violet-600
    colorScheme: "!bg-[#7C3AED]",
    textColorScheme: "text-[#7C3AED]"
  },
  {
    value: "gardening",
    label: "Gardening",
    icon: <FaTree />,
    hexColor: "#065F46", // green-800
    colorScheme: "!bg-[#065F46]",
    textColorScheme: "text-[#065F46]"
  },
  {
    value: "tech-detox",
    label: "Tech Detox",
    icon: <FaMobileAlt />,
    hexColor: "#4B5563", // gray-800
    colorScheme: "!bg-[#4B5563]",
    textColorScheme: "text-[#4B5563]"
  },
  {
    value: "volunteering",
    label: "Volunteering",
    icon: <FaHandsHelping />,
    hexColor: "#B91C1C", // red-700
    colorScheme: "!bg-[#B91C1C]",
    textColorScheme: "text-[#B91C1C]"
  }
];

export default categories;
