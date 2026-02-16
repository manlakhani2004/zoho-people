import Sidebar from "@/app/components/Sidebar";
import Topbar from "@/app/components/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
    
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
