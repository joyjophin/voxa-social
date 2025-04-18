
import { LeftSidebar } from "@/components/LeftSidebar";
import { ActiveRoom } from "@/components/ActiveRoom";
import { RightSidebar } from "@/components/RightSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#121026] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjEwJSIgY3k9IjE1JSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjOEEyQkUyIiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzNBMUU5QyIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iYiIgY3g9IjkwJSIgY3k9IjkwJSIgcj0iNTAlIj48c3RvcCBzdG9wLWNvbG9yPSIjMDBGMEZGIiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzEyMTAyNiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHJlY3QgZmlsbD0idXJsKCNiKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-90"></div>
      <SidebarProvider>
        <div className="relative flex h-full w-full z-10">
          <LeftSidebar />
          <main className="flex-1 overflow-hidden border-x border-purple-900/20 backdrop-blur-sm bg-[#121026]/30">
            <ActiveRoom />
          </main>
          <RightSidebar />
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
