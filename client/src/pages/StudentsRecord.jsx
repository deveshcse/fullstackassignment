import Filters from "./Filters";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DialogForm from "./DialogForm";
import { useGetStudentsQuery } from "../redux/api/studentApiSlice";
import { formatDate, formatDateTime } from "../utils/formatDates";
import { useDeleteStudentMutation } from "../redux/api/studentApiSlice";

const StudentsRecord = () => {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  const handleDelete = async (id) => {
    console.log(id, typeof id);

    try {
      const result = await deleteStudent(id).unwrap();
      console.log("Student deleted:", result);
      refetch();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  return (
    <div className="flex flex-col px-2">
      <div className="p-4 w-full flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Filters props="AY 2024-25" />
          <Filters props="CBSE 9" />
        </div>
        <DialogForm buttonType="Add new Student" />
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
              <TableRow>
                <TableCell>Fetching.....</TableCell>
              </TableRow>
            ) : isLoading ? (
              <TableRow>
                <TableCell>Loading.....</TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell>Error.....</TableCell>
              </TableRow>
            ) : (
              data?.map((student) => (
                <TableRow
                  key={student.id}
                  className="group font-sans font-normal text-xs leading-[16px] hover:bg-gray-200"
                >
                  <TableCell className="">{student.studentName}</TableCell>
                  <TableCell className="">{student.cohort}</TableCell>
                  <TableCell className="flex flex-row items-center justify-start h-full">
                    <div className="min-w-40 flex items-center space-x-2">
                      <img
                        src={`/imageIcon0.svg`}
                        alt="imageIcon"
                        className="w-6 h-6"
                      />
                      <span>{student.course1}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src={`/imageIcon1.svg`}
                        alt="imageIcon"
                        className="w-6 h-6"
                      />
                      <span>{student.course2}</span>
                    </div>
                  </TableCell>

                  <TableCell>{formatDate(student.dateJoined)}</TableCell>
                  <TableCell>{formatDateTime(student.lastLogin)} </TableCell>
                  <TableCell className="flex items-center justify-center">
                    <div
                      className={`h-4 w-4 rounded-full ${
                        student.status ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                  </TableCell>
                  <TableCell className="opacity-0 group-hover:opacity-100 text-black text-md font-bold">
                    <Popover>
                      <PopoverTrigger className="text-justify">
                        <EllipsisVertical />
                      </PopoverTrigger>
                      <PopoverContent className="mr-10 w-52 flex items-center justify-center gap-5 px-2">
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </Button>
                        <DialogForm buttonType="Edit" props={student} />
                      </PopoverContent>
                    </Popover>
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