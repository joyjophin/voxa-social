
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProfileProps {
  name: string;
  status?: string;
  avatar?: string;
  isCollapsed?: boolean;
}

export function UserProfile({ 
  name, 
  status = "Online", 
  avatar = "", 
  isCollapsed = false 
}: UserProfileProps) {
  const [dynamicAvatar, setDynamicAvatar] = useState("");
  
  useEffect(() => {
    if (avatar && avatar.includes("http")) {
      setDynamicAvatar(avatar);
    } else {
      // Generate a consistent avatar based on name
      const seed = name.replace(/\s+/g, '').toLowerCase();
      const avatarUrl = `https://avatar.iran.liara.run/public/boy?username=${seed}`;
      setDynamicAvatar(avatarUrl);
    }
  }, [name, avatar]);

  return (
    <div className={`flex ${isCollapsed ? "justify-center" : "items-center gap-3 px-3"} py-3`}>
      <div className="relative">
        <Avatar className="h-10 w-10 border-2 border-purple-500 shadow-[0_0_15px_rgba(149,76,233,0.3)]">
          <AvatarImage src={dynamicAvatar} alt={name} />
          <AvatarFallback className="bg-purple-900 text-white">
            {name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-green-400 to-green-500 ring-2 ring-background shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
      </div>
      
      {!isCollapsed && (
        <div className="overflow-hidden">
          <p className="truncate font-medium">{name}</p>
          <p className="truncate text-xs text-muted-foreground">{status}</p>
        </div>
      )}
    </div>
  );
}
