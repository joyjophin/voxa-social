
import { UserProfile } from "@/components/UserProfile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Tag, 
  Users, 
  Calendar, 
  PlusSquare,
  Bell, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut 
} from "lucide-react";

export function LeftSidebar() {
  const { open } = useSidebar();
  
  return (
    <>
      <Sidebar className="border-r border-purple-900/20 bg-[#17152a]">
        <SidebarRail />
        <SidebarTrigger className="absolute right-2 top-3 z-20" />
        
        <SidebarContent className="flex flex-col">
          <div className="mb-6 px-3 pt-6">
            {open ? (
              <h1 className="text-2xl font-bold tracking-tight text-white">Voxa</h1>
            ) : (
              <h1 className="text-center text-2xl font-bold tracking-tight text-white">V</h1>
            )}
          </div>
          
          <UserProfile name="Albert" status="Speaking" isCollapsed={!open} />
          
          <SidebarMenu className="mt-6 px-3">
            {/* Main Navigation */}
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Discover" className="py-2">
                <Home className="h-5 w-5" />
                <span>Discover</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Topics" className="py-2">
                <Tag className="h-5 w-5" />
                <span>Topics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Clubs" className="py-2">
                <Users className="h-5 w-5" />
                <span>Clubs</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Events" className="py-2">
                <Calendar className="h-5 w-5" />
                <span>Events</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            {/* Visual divider */}
            <div className="my-2 border-t border-purple-900/20"></div>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Create Room" className="py-2">
                <PlusSquare className="h-5 w-5" />
                <span>Create Room</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Notifications" className="py-2">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Messages" className="py-2">
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            {/* Visual divider */}
            <div className="my-2 border-t border-purple-900/20"></div>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="My Profile" className="py-2">
                <User className="h-5 w-5" />
                <span>My Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Settings" className="py-2">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter>
          <Button 
            variant="outline" 
            className="mx-3 mb-6 w-[calc(100%-24px)] gap-2 border-purple-500/50 bg-purple-950/40 text-purple-200 hover:bg-purple-900/50 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
