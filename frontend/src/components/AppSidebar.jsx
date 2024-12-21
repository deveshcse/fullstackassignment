import { Link } from "react-router-dom";
import { BoltIcon, HelpCircle, BookMarked } from "lucide-react";
import { RiBookReadFill, RiDashboard3Line } from "react-icons/ri";
import { HiOutlineChartPie } from "react-icons/hi2";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: RiDashboard3Line,
  },
  {
    title: "Students",
    url: "students",
    icon: RiBookReadFill,
  },
  {
    title: "Chapter",
    url: "chapters",
    icon: BookMarked,
  },
  {
    title: "Help",
    url: "help",
    icon: HelpCircle,
  },
  {
    title: "Reports",
    url: "report",
    icon: HiOutlineChartPie,
  },
  { title: "Settings", url: "setting", icon: BoltIcon },
];

export function AppSidebar() {
  return (
    <Sidebar variant="side" className="-z-10"  >
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel className="my-6">
            <img
              className="w-[98px] h-[42px] bg-[#ffffff]"
              src="/logo.svg"
              alt=""
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="p-3">
                  <SidebarMenuButton
                    asChild
                    className="focus:bg-gray-200 focus:text-gray-950 text-gray-500"
                  >
                    <Link to={item.url} className="my-1  ">
                      <div>
                        <item.icon size={24} />
                      </div>
                      <span className="text-base font-bold font-sans">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
