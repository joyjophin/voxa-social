
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Flame, Clock, Tag, Play } from "lucide-react";

interface RoomCardProps {
  title: string;
  description: string;
  tags: string[];
  listenerCount: number;
  isLive: boolean;
  host: string;
  hostAvatar: string;
  startTime?: string;
  category: string;
  backgroundGradient: string;
}

function RoomCard({ 
  title, 
  description, 
  tags, 
  listenerCount, 
  isLive, 
  host, 
  hostAvatar,
  startTime,
  category,
  backgroundGradient
}: RoomCardProps) {
  return (
    <Card className={`overflow-hidden border-0 shadow-lg ${backgroundGradient} rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(76,29,149,0.25)]`}>
      <CardContent className="p-6 relative">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <Badge className="px-2.5 py-0.5 bg-purple-900/70 text-purple-100 border-purple-700">
              {category}
            </Badge>
            {isLive ? (
              <Badge className="px-2.5 py-0.5 bg-red-500/90 border-red-700 flex items-center gap-1 text-white">
                <span className="animate-pulse w-2 h-2 rounded-full bg-white"></span>
                LIVE
              </Badge>
            ) : (
              <div className="flex items-center gap-1 text-xs text-gray-300">
                <Clock className="h-3 w-3" />
                {startTime}
              </div>
            )}
          </div>
          
          <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
          <p className="text-xs text-gray-300 line-clamp-2 mb-4">{description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-purple-500/40">
                <img src={hostAvatar} alt={host} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-200">{host}</span>
            </div>
            
            <div className="flex items-center gap-1 text-xs text-gray-300">
              <Users className="h-3.5 w-3.5" />
              <span>{listenerCount}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-[10px] bg-black/20 border-white/10 text-gray-300 px-2"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const gradients = [
  "bg-gradient-to-br from-purple-900/90 to-indigo-800/90",
  "bg-gradient-to-br from-blue-900/90 to-purple-800/90",
  "bg-gradient-to-br from-indigo-900/90 to-blue-800/90",
  "bg-gradient-to-br from-violet-900/90 to-purple-800/90",
  "bg-gradient-to-br from-fuchsia-900/90 to-purple-800/90",
  "bg-gradient-to-br from-pink-900/90 to-fuchsia-800/90",
  "bg-gradient-to-br from-rose-900/90 to-pink-800/90",
];

// Mock data for rooms
const newRooms: RoomCardProps[] = [
  {
    title: "Future of Web Design 2025",
    description: "Exploring emerging trends and technologies shaping the web design landscape in 2025 and beyond.",
    tags: ["Web Design", "Trends", "UI", "UX"],
    listenerCount: 128,
    isLive: true,
    host: "Amanda Chen",
    hostAvatar: "https://avatar.iran.liara.run/public/girl?username=amandachen",
    category: "Design",
    backgroundGradient: gradients[0],
  },
  {
    title: "Mobile UX Patterns",
    description: "Breaking down successful mobile UI patterns and how to implement them in your next app.",
    tags: ["Mobile", "UX Patterns", "Design Systems"],
    listenerCount: 84,
    isLive: true,
    host: "Marcus Johnson",
    hostAvatar: "https://avatar.iran.liara.run/public/boy?username=marcusjohnson",
    category: "UX Design",
    backgroundGradient: gradients[1],
  },
  {
    title: "Design Ethics Roundtable",
    description: "Open discussion on ethical design challenges in modern digital products.",
    tags: ["Ethics", "Design Thinking", "Inclusive Design"],
    listenerCount: 56,
    isLive: true,
    host: "Olivia Park",
    hostAvatar: "https://avatar.iran.liara.run/public/girl?username=oliviapark",
    category: "Design Ethics",
    backgroundGradient: gradients[2],
  },
];

const suggestedRooms: RoomCardProps[] = [
  {
    title: "Freelance Design Career Path",
    description: "Tips, strategies, and real experiences about building a successful freelance design career.",
    tags: ["Freelance", "Career", "Business"],
    listenerCount: 0,
    isLive: false,
    host: "Jessica Miller",
    hostAvatar: "https://avatar.iran.liara.run/public/girl?username=jessicamiller",
    startTime: "Today, 6:00 PM",
    category: "Career",
    backgroundGradient: gradients[3],
  },
  {
    title: "Designing for AR/VR",
    description: "Best practices for creating immersive experiences in augmented and virtual reality applications.",
    tags: ["AR", "VR", "Immersive", "3D"],
    listenerCount: 0,
    isLive: false,
    host: "Chris Taylor",
    hostAvatar: "https://avatar.iran.liara.run/public/boy?username=christaylor",
    startTime: "Tomorrow, 2:00 PM",
    category: "Emerging Tech",
    backgroundGradient: gradients[4],
  },
  {
    title: "Color Theory Masterclass",
    description: "Deep dive into color theory and its practical applications in digital design.",
    tags: ["Color Theory", "Visual Design", "Aesthetics"],
    listenerCount: 0,
    isLive: false,
    host: "Elena Rodriguez",
    hostAvatar: "https://avatar.iran.liara.run/public/girl?username=elenarodriguez",
    startTime: "Tomorrow, 5:30 PM",
    category: "Visual Design",
    backgroundGradient: gradients[5],
  },
  {
    title: "Accessibility in Design",
    description: "Creating inclusive and accessible digital experiences for all users.",
    tags: ["Accessibility", "Inclusive Design", "WCAG"],
    listenerCount: 0,
    isLive: false,
    host: "Jamal Washington",
    hostAvatar: "https://avatar.iran.liara.run/public/boy?username=jamalwashington",
    startTime: "Wed, 1:00 PM",
    category: "Accessibility",
    backgroundGradient: gradients[6],
  },
];

const Discover = () => {
  return (
    <div className="h-screen w-full overflow-auto bg-[#121026] text-white pb-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjEwJSIgY3k9IjE1JSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjOEEyQkUyIiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzNBMUU5QyIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iYiIgY3g9IjkwJSIgY3k9IjkwJSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBGMEZGIiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzEyMTAyNiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHJlY3QgZmlsbD0idXJsKCNiKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-90 fixed"></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            Discover
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Explore live conversations and upcoming rooms curated for you
          </p>
        </header>
        
        <section className="mb-12 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-semibold">Live Now</h2>
            </div>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              View all
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newRooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </section>
        
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Suggested for You</h2>
            </div>
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
              View all
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suggestedRooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Discover;
