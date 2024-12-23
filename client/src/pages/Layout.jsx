import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <SidebarProvider className="flex space-x-5 bg-gray-100">
      <AppSidebar className="" />
      <SidebarInset className="flex gap-5 bg-gray-100">
        <Header className="" />
        <main className="bg-white rounded-lg mr-4 ">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
