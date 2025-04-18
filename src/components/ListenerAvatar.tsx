
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ListenerAvatarProps {
  name: string;
  avatar?: string;
  id?: number;
}

export function ListenerAvatar({ name, avatar, id }: ListenerAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [dynamicAvatar, setDynamicAvatar] = useState("");
  const [loading, setLoading] = useState(true);
  
  // Generate a consistent avatar based on the name
  useEffect(() => {
    if (avatar) {
      setDynamicAvatar(avatar);
      setLoading(false);
    } else {
      // Use the avatar API with a seed based on name or id for consistency
      const seed = id || name.replace(/\s+/g, '').toLowerCase();
      // Alternate between boy and girl avatars for diversity
      const gender = id && id % 2 === 0 ? 'girl' : 'boy';
      const avatarUrl = `https://avatar.iran.liara.run/public/${gender}?username=${seed}`;
      setDynamicAvatar(avatarUrl);
      setLoading(false);
    }
  }, [name, avatar, id]);
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className="flex flex-col items-center transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`relative transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            <Avatar className={`h-14 w-14 border-2 ${
              isHovered 
                ? 'border-purple-400 shadow-[0_0_20px_rgba(149,76,233,0.5)]' 
                : 'border-purple-500/30 shadow-[0_0_10px_rgba(149,76,233,0.3)]'
              } transition-all duration-300 ${loading ? 'animate-pulse bg-purple-900/50' : ''}`}>
              <AvatarImage src={dynamicAvatar} alt={name} className="object-cover" />
              <AvatarFallback className="bg-purple-900/50 text-white font-semibold">
                {name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 ${isHovered ? 'opacity-70' : ''} transition-opacity duration-300`}></div>
          </div>
          <p className="mt-3 text-center text-xs font-medium text-gray-300 transition-colors duration-300 hover:text-white truncate max-w-full px-1">
            {name}
          </p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-48 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl bg-white/8 border border-white/20 transition-opacity duration-200">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-muted-foreground">Listening</p>
          <div className="text-xs text-gray-400 pt-1">
            <div className="flex justify-between">
              <span>Followers</span>
              <span className="text-white">{Math.floor(Math.random() * 3000)}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
