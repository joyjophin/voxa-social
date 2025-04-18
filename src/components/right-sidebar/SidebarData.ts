
import { ChatMessage, RoomInfo } from "./types";

// Mock data for chat messages about design and creativity
export const initialMessages: ChatMessage[] = [
  {
    id: 1,
    user: {
      name: "Courtney Henry",
      avatar: "",
    },
    message: "Any favorite color palettes you always fall back on?",
    timestamp: "12:42",
  },
  {
    id: 2,
    user: {
      name: "Ralph Edwards",
      avatar: "",
    },
    message: "Grid vs. freeform — where do you stand in layout design?",
    timestamp: "12:45",
  },
  {
    id: 3,
    user: {
      name: "Guy Hawkins",
      avatar: "",
    },
    message: "I'm a sucker for brutalist UI, anyone else?",
    timestamp: "12:47",
  },
  {
    id: 4,
    user: {
      name: "Esther Howard",
      avatar: "",
    },
    message: "Procreate or Figma for early concepts?",
    timestamp: "12:49",
  },
  {
    id: 5,
    user: {
      name: "Cameron Williamson",
      avatar: "",
    },
    message: "The latest Apple keynote felt like a design clinic 🔥",
    timestamp: "12:51",
  },
  {
    id: 6,
    user: {
      name: "Brooklyn Simmons",
      avatar: "",
    },
    message: "Love how they used typography to drive emotion.",
    timestamp: "12:53",
  },
  {
    id: 7,
    user: {
      name: "Leslie Alexander",
      avatar: "",
    },
    message: "Has anyone explored AI-assisted concept art lately?",
    timestamp: "12:55",
  },
  {
    id: 8,
    user: {
      name: "Jenny Wilson",
      avatar: "",
    },
    message: "Do you follow any underrated UX design blogs?",
    timestamp: "12:57",
  },
  {
    id: 9,
    user: {
      name: "Dianne Russell",
      avatar: "",
    },
    message: "Let's do a feedback round for someone's portfolio!",
    timestamp: "12:58",
  }
];

// Mock data for room info
export const roomInfo: RoomInfo = {
  title: "Design & Creativity",
  description: "A space to discuss design trends, creative processes, and share inspiration for your next project.",
  host: {
    name: "Alex Morgan",
    avatar: "",
    title: "Senior Product Designer @ Adobe"
  },
  tags: ["UI/UX", "Product Design", "Creative Process", "Inspiration"],
  schedule: {
    start: "2:00 PM",
    end: "3:30 PM"
  },
  club: "Design Pioneers Club",
  isPublic: true,
};
