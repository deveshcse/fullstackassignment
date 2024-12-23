import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = ({props}) => {
  return (
    <Select className="">
      <SelectTrigger className="w-[180px] font-bold text-[#3F526E] font-sans bg-[#E9EDF1]">
        <SelectValue placeholder={props}  className=""/>
      </SelectTrigger>
      {/* <SelectContent >
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent> */}
    </Select>
  );
};

export default Filters;
