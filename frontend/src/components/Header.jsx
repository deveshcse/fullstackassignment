import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "@/components/ui/input";
import {
  Search,
  CircleHelp,
  MessageSquareMore,
  Bell,
  Settings2,
} from "lucide-react";

const Header = () => {
  return (
    <div className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2  px-4">
      <SidebarTrigger className="-ml-1" />
      <div className="w-full flex items-center justify-between space-x-5">
        <div className="w-1/2 border p-1 rounded-md flex items-center justify-start gap-2">
          <Search className="text-[#808281] " />
          <Input placeholder="Search your course" className="border-none" />
        </div>

        <div className="flex items-center justify-start space-x-10">
          <div>
            <CircleHelp />
          </div>
          <div>
            <MessageSquareMore />
          </div>
          <div>
            <Settings2 />
          </div>
          <div>
            <Bell />
          </div>
          <div className="flex space-x-5 items-center justify-between">
            <img
              src="/userImageIcon.svg"
              alt="userImage"
              className="rounded-lg"
            />
            <span className="text-[#05162E] text-lg font-semibold ">
              Adeline H. Dancy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
