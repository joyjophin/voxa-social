
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface RightSidebarTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onCollapse: () => void;
}

export function RightSidebarTabs({ activeTab, setActiveTab, onCollapse }: RightSidebarTabsProps) {
  return (
    <div className="flex items-center justify-between border-b border-purple-900/20 px-6 py-4">
      <div className="flex items-center">
        <TabsList className="grid w-[180px] grid-cols-2 bg-purple-900/20">
          <TabsTrigger 
            value="roomInfo" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-700 data-[state=active]:to-indigo-700"
            onClick={() => setActiveTab("roomInfo")}
          >
            Room Info
          </TabsTrigger>
          <TabsTrigger 
            value="chat" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-700 data-[state=active]:to-indigo-700"
            onClick={() => setActiveTab("chat")}
          >
            Chat
          </TabsTrigger>
        </TabsList>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-gray-400 hover:text-white"
        onClick={onCollapse}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
    </div>
  );
}
