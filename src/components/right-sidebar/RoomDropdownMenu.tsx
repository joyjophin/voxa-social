
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

export function RoomDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end" className="bg-[#25213f] border border-purple-500/20 text-white">
        <DropdownMenuItem className="hover:bg-purple-800/30 focus:bg-purple-800/30">
          Report Room
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-purple-800/30 focus:bg-purple-800/30 text-red-400">
          Leave Room
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
