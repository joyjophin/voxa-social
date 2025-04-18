
import { Mic, Hand, PhoneOff, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SpeakerAvatar } from "@/components/SpeakerAvatar";
import { ListenerAvatar } from "@/components/ListenerAvatar";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

// Mock data for speakers and listeners
const speakers = [
  { id: 1, name: "Cody Fisher", avatar: "", speaking: true, muted: false, host: true },
  { id: 2, name: "Jane Cooper", avatar: "", speaking: false, muted: false },
  { id: 3, name: "Darrell Steward", avatar: "", speaking: false, muted: true },
  { id: 4, name: "Leslie Alexander", avatar: "", speaking: false, muted: false },
];

const listeners = [
  { id: 1, name: "Kristin Waltson", avatar: "" },
  { id: 2, name: "Darlene Robertson", avatar: "" },
  { id: 3, name: "Eleener Pena", avatar: "" },
  { id: 4, name: "Darrell Steward", avatar: "" },
  { id: 5, name: "Robert Fox", avatar: "" },
  { id: 6, name: "Jacob Jones", avatar: "" },
  { id: 7, name: "Jonnes Weda", avatar: "" },
  { id: 8, name: "Annotts Black", avatar: "" },
  { id: 9, name: "Jacob Jones", avatar: "" },
  { id: 10, name: "Jenny Wilson", avatar: "" },
  { id: 11, name: "Marvin McKamey", avatar: "" },
  { id: 12, name: "Ralph Eawards", avatar: "" },
];

export function ActiveRoom() {
  const [micActive, setMicActive] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-purple-900/20 bg-[#121026]/80 px-8 py-6 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gradient-to-r from-indigo-600/80 to-purple-600/80 px-3 py-1 text-xs font-medium text-white shadow-md">
            LIVE
          </div>
          <h1 className="text-3xl font-bold text-gradient tracking-tight">Design & Creativity</h1>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="glass-panel p-6 rounded-xl shadow-[0_4px_30px_rgba(138,73,255,0.15)]">
          <div className="mb-3 flex items-center">
            <span className="text-sm font-normal text-gray-400 tracking-wider">Host</span>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-11 w-11 border-2 border-purple-500 shadow-[0_0_20px_rgba(149,76,233,0.35)]">
              <AvatarImage src={`https://avatar.iran.liara.run/public/boy?username=host`} alt="Cody Fisher" />
              <AvatarFallback className="bg-purple-900 text-white">CF</AvatarFallback>
            </Avatar>
            <span className="text-xl font-medium text-white">Cody Fisher</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-5 text-xl font-medium text-gray-100 flex items-center tracking-wide">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
            Speakers
          </h2>
          <div className="glass-panel p-6 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {speakers.map((speaker) => (
                <SpeakerAvatar
                  key={speaker.id}
                  id={speaker.id}
                  name={speaker.name}
                  avatar={speaker.avatar}
                  isSpeaking={speaker.speaking}
                  isMuted={speaker.muted}
                  isHost={speaker.host}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-medium text-gray-100 flex items-center tracking-wide">
            <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
            Listeners
          </h2>
          <div className="glass-panel p-6 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
              {listeners.map((listener) => (
                <ListenerAvatar
                  key={listener.id}
                  id={listener.id}
                  name={listener.name}
                  avatar={listener.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-7 border-t border-purple-900/20 bg-[#121026]/90 py-8 backdrop-blur-xl shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
        <Button
          variant="outline"
          size="icon"
          className={`h-16 w-16 rounded-full border-2 transition-all duration-300 ${
            micActive 
              ? 'border-emerald-500 bg-gradient-to-r from-emerald-900/50 to-emerald-800/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-900/60 hover:text-white hover:scale-105' 
              : 'border-purple-500/50 bg-purple-950/40 text-purple-200 hover:bg-purple-900/50 hover:text-white hover:scale-105'
          }`}
          onClick={() => setMicActive(!micActive)}
        >
          <Mic className={`h-7 w-7 transition-transform duration-200 ${micActive ? 'scale-110' : ''}`} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`h-16 w-16 rounded-full border-2 transition-all duration-300 ${
            handRaised
              ? 'border-yellow-500 bg-gradient-to-r from-yellow-900/50 to-amber-800/50 text-yellow-200 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:bg-yellow-900/60 hover:text-white hover:scale-105'
              : 'border-purple-500/50 bg-purple-950/40 text-purple-200 hover:bg-purple-900/50 hover:text-white hover:scale-105'
          }`}
          onClick={() => setHandRaised(!handRaised)}
        >
          <Hand className={`h-7 w-7 transition-transform duration-200 ${handRaised ? 'scale-110' : ''}`} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-16 w-16 rounded-full border-2 border-red-500/50 bg-gradient-to-r from-red-900/50 to-red-800/40 text-red-200 shadow-md transition-all duration-300 hover:border-red-500 hover:bg-red-900/50 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105"
        >
          <PhoneOff className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
}
