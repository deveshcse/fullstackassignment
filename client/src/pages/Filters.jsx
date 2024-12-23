import {
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = ({props}) => {
  return (
    <Select className="">
      <SelectTrigger className="w-[180px] font-bold text-[#3F526E] font-sans bg-[#E9EDF1]">
        <SelectValue placeholder={props}  className=""/>
      </SelectTrigger>
    </Select>
  );
};

export default Filters;
