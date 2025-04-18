
import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { RightSidebarTabs } from "./right-sidebar/RightSidebarTabs";
import { ChatPanel } from "./right-sidebar/ChatPanel";
import { RoomInfo } from "./right-sidebar/RoomInfo";
import { CollapsedSidebar } from "./right-sidebar/CollapsedSidebar";
import { initialMessages, roomInfo } from "./right-sidebar/SidebarData";
import { ChatMessage, RoomInfo as RoomInfoType } from "./right-sidebar/types";

export function RightSidebar() {
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialMessages);
  const [roomData, setRoomData] = useState<RoomInfoType>(roomInfo);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Generate avatar URLs for messages
  useEffect(() => {
    const updatedMessages = initialMessages.map((msg, index) => ({
      ...msg,
      user: {
        ...msg.user,
        avatar: `https://avatar.iran.liara.run/public/${index % 2 === 0 ? 'boy' : 'girl'}?username=${msg.user.name.replace(/\s+/g, '').toLowerCase()}`
      }
    }));
    setChatMessages(updatedMessages);
    
    // Generate avatar for host
    setRoomData({
      ...roomData,
      host: {
        ...roomData.host,
        avatar: `https://avatar.iran.liara.run/public/boy?username=alexmorgan`
      }
    });
  }, []);
  
  const handleCollapse = () => {
    setIsCollapsed(true);
  };
  
  const handleExpand = () => {
    setIsCollapsed(false);
  };
  
  if (isCollapsed) {
    return <CollapsedSidebar onExpand={handleExpand} />;
  }
  
  return (
    <div className="hidden w-80 flex-shrink-0 border-l border-purple-900/20 bg-[#17152a] lg:block">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
        <RightSidebarTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onCollapse={handleCollapse}
        />
        
        {/* Room Info Tab Content */}
        <TabsContent value="roomInfo" className="h-[calc(100%-62px)]">
          <RoomInfo roomData={roomData} />
        </TabsContent>
        
        {/* Chat Tab Content */}
        <TabsContent value="chat" className="flex h-[calc(100%-62px)] flex-col">
          <ChatPanel chatMessages={chatMessages} setChatMessages={setChatMessages} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
