
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [messageInput, setMessageInput] = useState("");
  
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    onSendMessage(messageInput);
    setMessageInput("");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="border-t border-purple-900/20 p-6">
      <div className="relative">
        <Input 
          className="rounded-full border-purple-500/30 bg-purple-900/20 pl-5 pr-12 py-6 text-sm focus:border-purple-400 focus:ring-1 focus:ring-purple-500/50 focus:shadow-[0_0_15px_rgba(149,76,233,0.2)]"
          placeholder="Send a message..." 
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute right-2 top-2 h-9 w-9 rounded-full hover:bg-gradient-to-r hover:from-purple-600/70 hover:to-indigo-600/70 transition-all duration-300"
          onClick={handleSendMessage}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
