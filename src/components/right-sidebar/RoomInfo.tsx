
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Share, Info, Tag, Calendar, Globe, Lock } from "lucide-react";
import { RoomDropdownMenu } from "./RoomDropdownMenu";
import { RoomInfo as RoomInfoType } from "./types";

interface RoomInfoProps {
  roomData: RoomInfoType;
}

export function RoomInfo({ roomData }: RoomInfoProps) {
  const handleShareRoom = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };
  
  return (
    <ScrollArea className="h-full">
      <div className="space-y-6 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-medium tracking-wide text-gradient">{roomData.title}</h3>
          <RoomDropdownMenu />
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{roomData.description}</p>
        
        <div className="space-y-4 pt-4">
          <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Hosted by</h4>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-900/10 backdrop-blur-md border border-purple-500/20">
            <Avatar className="h-14 w-14 border-2 border-purple-500/30 shadow-[0_0_15px_rgba(149,76,233,0.3)]">
              <AvatarImage src={roomData.host.avatar} alt={roomData.host.name} />
              <AvatarFallback className="bg-purple-900/70 text-white">
                {roomData.host.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h5 className="font-medium text-white">{roomData.host.name}</h5>
              <p className="text-xs text-gray-400">{roomData.host.title}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-purple-400" />
            <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium">Topics</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {roomData.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-purple-900/20 border-purple-500/30 text-gray-300 hover:bg-purple-900/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-4 py-4 border-t border-b border-purple-900/20">
          <div className="flex items-center gap-3">
            <Calendar className="h-4 w-4 text-purple-400" />
            <div className="flex justify-between w-full">
              <span className="text-sm text-gray-400">Schedule</span>
              <span className="text-sm text-white">
                {roomData.schedule.start} - {roomData.schedule.end}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Info className="h-4 w-4 text-purple-400" />
            <div className="flex justify-between w-full">
              <span className="text-sm text-gray-400">Club</span>
              <span className="text-sm text-white">{roomData.club}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {roomData.isPublic ? (
              <Globe className="h-4 w-4 text-purple-400" />
            ) : (
              <Lock className="h-4 w-4 text-purple-400" />
            )}
            <div className="flex justify-between w-full">
              <span className="text-sm text-gray-400">Visibility</span>
              <span className="text-sm text-white">{roomData.isPublic ? "Public" : "Private"}</span>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleShareRoom}
          className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 gap-2"
        >
          <Share className="h-4 w-4" />
          Share Room
        </Button>
      </div>
    </ScrollArea>
  );
}
