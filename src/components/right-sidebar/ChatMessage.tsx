
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatMessageProps {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  timestamp: string;
  index: number;
}

export function ChatMessage({ user, message, timestamp, index }: ChatMessageProps) {
  return (
    <div className="flex gap-4 message-appear" style={{animationDelay: `${index * 0.1}s`}}>
      <Avatar className="h-9 w-9 flex-shrink-0 shadow-[0_0_10px_rgba(149,76,233,0.2)]">
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className="bg-purple-900 text-white">
          {user.name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-gray-400/60">{timestamp}</p>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed mt-1">{message}</p>
      </div>
    </div>
  );
}
