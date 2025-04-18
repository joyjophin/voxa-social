
import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { RoomDropdownMenu } from "./RoomDropdownMenu";
import { ChatMessage as ChatMessageType } from "./types";

interface ChatPanelProps {
  chatMessages: ChatMessageType[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessageType[]>>;
}

export function ChatPanel({ chatMessages, setChatMessages }: ChatPanelProps) {
  const chatScrollRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom for chat messages when new messages are added
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = (messageText: string) => {
    const newMessage: ChatMessageType = {
      id: chatMessages.length + 1,
      user: {
        name: "You", // Using "You" for the user's messages
        avatar: `https://avatar.iran.liara.run/public/boy?username=currentuser`
      },
      message: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setChatMessages(prev => [...prev, newMessage]);
  };

  return (
    <>
      <div className="mb-2 px-6 pt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-medium tracking-wide text-gradient">Chat</h3>
          <RoomDropdownMenu />
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-6" ref={chatScrollRef}>
        <div className="space-y-6 py-4">
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={message.id}
              id={message.id}
              user={message.user}
              message={message.message}
              timestamp={message.timestamp}
              index={index}
            />
          ))}
        </div>
      </ScrollArea>
      
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
}
