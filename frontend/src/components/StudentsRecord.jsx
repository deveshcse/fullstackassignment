import Filters from "./Filters";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DialogForm from "./DialogForm";
import { useGetStudentsQuery } from "../../utils/apiSlice";

const StudentsRecord = () => {


  const { data, isLoading, isFetching, isError } = useGetStudentsQuery();

  return (
    <div className="flex flex-col px-2">
      <div className="p-4 w-full flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Filters props="AY 2024-25" />
          <Filters props="CBSE 9" />
        </div>
        <DialogForm />
      </div>

      <div className="px-4">
        <Table>
          <TableHeader className="">
            <TableRow>
              <TableHead className="text-[#000000] font-bold text-xs leading-[16px]">
                Student Name
              </TableHead>
              <TableHead className="text-[#000000] font-bold  text-xs leading-[16px]">
                Cohort
              </TableHead>
              <TableHead className="text-[#000000] font-bold  text-xs leading-[16px]">
                Cources
              </TableHead>
              <TableHead className="text-[#000000] font-bold  text-xs leading-[16px]">
                Date Joined
              </TableHead>
              <TableHead className="text-[#000000] font-bold  text-xs leading-[16px]">
                Last Login
              </TableHead>
              <TableHead className="text-center text-[#000000]  text-xs leading-[16px] font-bold">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {isFetching ? (
              <p>Fetching.....</p>
            ) : isLoading ? (
              <p>Loading...</p>
            ) : isError ? (
              <p>Error....</p>
            ) : (
              data?.map((student) => (
                <TableRow
                  key={student.id}
                  className=" group font-sans font-normal text-xs leading-[16px] hover:bg-gray-200"
                >
                  <TableCell className="">{student.studentName}</TableCell>
                  <TableCell>{student.cohort}</TableCell>
                  <TableCell className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 min-w-36">
                      <img
                        src={`/imageIcon0.svg`}
                        alt="imageIcon"
                        className="w-6 h-6"
                      />
                      <span>{student.course1}</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <img
                        src={`/imageIcon1.svg`}
                        alt="imageIcon"
                        className="w-6 h-6"
                      />
                      <span>{student.course2}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.dateJoined}</TableCell>
                  <TableCell>{student.lastLogin} </TableCell>
                  <TableCell className=" flex justify-center">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        student.status ? "bg-red-500" : "bg-green-500"
                      }`}
                    ></div>
                  </TableCell>
                  <TableCell className="opacity-0 group-hover:opacity-100 text-black text-md font-bold">
                    ...
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentsRecord;
