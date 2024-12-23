import { SidebarTrigger } from "../components/ui/sidebar";
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
    <div className="flex sticky z-50 top-0 bg-gray-100 h-16 shrink-0 items-center gap-2 mt-5 rounded-lg">
      <SidebarTrigger className="-ml-1" />
      <div className="w-full flex items-center justify-between gap-4">
        <div className="w-1/2 border p-1 rounded-md flex items-center justify-start gap-2 bg-white">
          <Search className="text-[#808281] ml-4 " />
          <Input placeholder="Search your course" className="border-none" />
        </div>

        <div className="flex items-center justify-start space-x-10">
          <div>
            <CircleHelp />
          </div>
          <div className="flex items-center relative">
            <MessageSquareMore />
            <div className=" p-1 border-2 border-white absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div>
            <Settings2 />
          </div>
          <div className="flex items-center relative">
            <Bell />
            <div className=" p-1 border-2 border-white absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className="flex space-x-5 items-center justify-between">
            <img
              src="/userImageIcon.svg"
              alt="userImage"
              className="rounded-lg"
            />
            <span className="text-[#05162E] text-lg font-semibold pr-4 ">
              Adeline H. Dancy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
