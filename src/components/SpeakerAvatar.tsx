
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mic, MicOff } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface SpeakerAvatarProps {
  name: string;
  avatar?: string;
  isSpeaking?: boolean;
  isMuted?: boolean;
  isHost?: boolean;
  id?: number;
}

export function SpeakerAvatar({ 
  name, 
  avatar,
  isSpeaking = false, 
  isMuted = false,
  isHost = false,
  id
}: SpeakerAvatarProps) {
  const [dynamicAvatar, setDynamicAvatar] = useState("");
  const [loading, setLoading] = useState(true);
  
  // Generate a consistent avatar based on the name or use provided avatar
  useEffect(() => {
    if (avatar) {
      setDynamicAvatar(avatar);
      setLoading(false);
    } else {
      // Use the avatar API with a seed based on name or id for consistency
      const seed = id || name.replace(/\s+/g, '').toLowerCase();
      const avatarUrl = `https://avatar.iran.liara.run/public/boy?username=${seed}`;
      setDynamicAvatar(avatarUrl);
      setLoading(false);
    }
  }, [name, avatar, id]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex flex-col items-center group">
          <div className="relative">
            <div className={`absolute -inset-2 rounded-full ${
              isSpeaking 
                ? 'speaking-pulse bg-gradient-to-r from-purple-600/50 to-indigo-500/50' 
                : 'bg-transparent'
            }`}></div>
            
            <Avatar className={`h-20 w-20 border-2 transition-all duration-300 ${
              isSpeaking 
                ? 'border-purple-500 avatar-glow-speaking' 
                : 'border-purple-500/50 avatar-glow'
            } ${loading ? 'animate-pulse bg-purple-900/50' : ''}`}>
              <AvatarImage src={dynamicAvatar} alt={name} className="object-cover" />
              <AvatarFallback className="bg-purple-900 text-white">
                {name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="absolute -bottom-1 -right-1 rounded-full bg-gradient-to-r from-[#121026]/80 to-[#191236]/80 backdrop-blur-sm p-1.5 border border-white/10">
              {isMuted ? (
                <MicOff className="h-4 w-4 text-red-400" />
              ) : (
                <Mic className={`h-4 w-4 ${isSpeaking ? 'text-green-400 animate-pulse' : 'text-gray-300'}`} />
              )}
            </div>
            
            {isHost && (
              <div className="absolute -top-2 -right-2 rounded-full glass-panel px-2 py-1 text-[10px] font-medium text-white border border-purple-500/30 shadow-[0_0_15px_rgba(138,73,255,0.25)]">
                HOST
              </div>
            )}
          </div>
          <p className="mt-3 text-center text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
            {name}
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="z-50 w-72 p-4 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl bg-white/10 border border-white/10 transition-opacity duration-200 space-y-2">
        <div className="flex justify-between">
          <div>
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-xs text-muted-foreground">{isHost ? 'Room Host' : 'Speaker'}</p>
          </div>
          <div className="text-xs text-gray-400">
            {isMuted ? 'Muted' : isSpeaking ? 'Speaking' : 'Online'}
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          <div className="flex justify-between">
            <span>Followers</span>
            <span className="text-white">{Math.floor(Math.random() * 5000)}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Rooms Created</span>
            <span className="text-white">{Math.floor(Math.random() * 50)}</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
