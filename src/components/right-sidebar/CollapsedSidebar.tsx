
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface CollapsedSidebarProps {
  onExpand: () => void;
}

export function CollapsedSidebar({ onExpand }: CollapsedSidebarProps) {
  return (
    <div className="hidden w-12 flex-shrink-0 border-l border-purple-900/20 bg-[#17152a] lg:flex flex-col items-center py-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-gray-400 hover:text-white" 
        onClick={onExpand}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
    </div>
  );
}
