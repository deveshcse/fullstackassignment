import React from "react";
import Filters from "./Filters";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentsRecord = () => {
  const students = [
    {
      studentName: "Devesh Mishra",
      cohort: "AY 2024-25",
      courses: ["CBSE 9 Science", "CBSE 9 Math"],
      dateJoined: "17 NOV 2024",
      lastLogin: "17 NOV 2024 4:16 PM",
      status: true,
    },
    {
      studentName: "Aarav Sharma",
      cohort: "AY 2024-25",
      courses: ["CBSE 10 Science", "CBSE 10 Math"],
      dateJoined: "18 NOV 2024",
      lastLogin: "19 NOV 2024 2:10 PM",
      status: false,
    },
    {
      studentName: "Ishika Gupta",
      cohort: "AY 2023-24",
      courses: ["CBSE 8 English", "CBSE 8 Math"],
      dateJoined: "15 OCT 2023",
      lastLogin: "16 OCT 2023 3:45 PM",
      status: true,
    },
    {
      studentName: "Rohan Mehta",
      cohort: "AY 2025-26",
      courses: ["CBSE 7 Science", "CBSE 7 Social Studies"],
      dateJoined: "10 DEC 2025",
      lastLogin: "11 DEC 2025 1:30 PM",
      status: false,
    },
  ];

  return (
    <div>
      <div className="p-4 w-full flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Filters />
          <Filters />
        </div>
        <Button className="bg-[#E9EDF1] text-[#3F526E] font-bold">
          <Plus /> Add new Student
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Student Name</TableHead>
            <TableHead>Cohort</TableHead>
            <TableHead>Cources</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.studentName} className="font-sans">
              <TableCell className="font-medium">
                {student.studentName}
              </TableCell>
              <TableCell>{student.cohort}</TableCell>
              {/* <TableCell>{student.courses}</TableCell> */}
              <TableCell>
                <div className="flex space-x-4">
                  {student.courses.map((course, index) => (
                    <div className="flex items-center space-x-2 min-w-36" key={course}>
                      <img
                        src={`/imageIcon${index}.svg`}
                        alt="imageIcon"
                        className="w-6 h-6"
                      />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>{student.dateJoined}</TableCell>
              <TableCell>{student.lastLogin} </TableCell>
              <TableCell className="flex items-center justify-center">
                <div className={`h-4 w-4 rounded-full ${student.status? "bg-red-500" : "bg-green-500"}`}></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsRecord;
