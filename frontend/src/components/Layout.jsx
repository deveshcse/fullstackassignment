import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <SidebarProvider className="flex gap-5">
      <AppSidebar className="" />
      <SidebarInset className=" " >
        <Header />
        <main >{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
