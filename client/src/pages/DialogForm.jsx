import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  useGetStudentsQuery,
  useAddNewStudentMutation,
  useUpdateStudentMutation,
} from "../redux/api/studentApiSlice";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  studentName: z.string().min(1, { message: "Student Name is required" }),
  cohort: z.string().min(1, { message: "Cohort is required" }),
  course1: z.string().min(1, { message: "Course 1 is required" }),
  course2: z.string().min(1, { message: "Course 2 is required" }),
  dateJoined: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Invalid date format for Date Joined",
  }),
  lastLogin: z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Invalid date format for Last Login",
  }),
  status: z.boolean(),
});

const DialogForm = ({ buttonType, props }) => {
  const {
    id,
    studentName,
    cohort,
    course1,
    course2,
    dateJoined,
    lastLogin,
    status,
  } = props || {};

  // Dates transformation for rendering
  const transformDate = (isoString) => isoString?.split("T")[0]; // For "type=date"
  const transformDateTime = (isoString) =>
    isoString?.replace("Z", "").slice(0, 16); // For "type=datetime-local"


  const [addNewStudent] = useAddNewStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();

  const { refetch } = useGetStudentsQuery();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      studentName: studentName,
      cohort: cohort,
      course1: course1,
      course2: course2,
      dateJoined: transformDate(dateJoined), // Convert to "yyyy-MM-dd"
      lastLogin: transformDateTime(lastLogin), // Convert to "yyyy-MM-ddTHH:mm"
      status: status || true,
    },
  });

  async function onSubmit(data) {
    console.log("Submitted data:", data);

    // Convert dateJoined and lastLogin to ISO 8601 format
    const formattedData = {
      ...data,
      dateJoined: new Date(data.dateJoined).toISOString(), // Convert date to ISO format
      lastLogin: new Date(data.lastLogin).toISOString(), // Convert datetime to ISO format
    };


    // form data submit handling for new records
    if (buttonType === "Add new Student") {
      try {
        const result = await addNewStudent(formattedData).unwrap();
        refetch();
        console.log("Response from backend:", result);
      } catch (error) {
        console.error("Error sending data to backend:", error);
      }
    }

    //form data submit handling for Editing of records
    if (buttonType === "Edit") {
      console.log("trying to edit");
      console.log(id);
      try {
        const result = await updateStudent({
          id: id,
          studentData: formattedData,
        }).unwrap();
        console.log("Student updated:", result);
        refetch();
      } catch (error) {
        console.error("Error updating student:", error);
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#E9EDF1] text-[#3F526E] font-bold"
        >
          <Plus /> {buttonType}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription className="text-xs">
            Fill the input fields to add a new record.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 grid"
          >
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Vatsal Trivedi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cohort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cohort</FormLabel>
                  <FormControl>
                    <Input placeholder="AY 2024-25" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course 1</FormLabel>
                  <FormControl>
                    <Input placeholder="CBSE 9 Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course 2</FormLabel>
                  <FormControl>
                    <Input placeholder="CBSE 9 Math" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateJoined"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Joined</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastLogin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Login</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex items-center gap-5">
                  <FormLabel className="mt-2">Status</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value ?? true}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className={`active:bg-gray-500 ${
                buttonType === "Edit" ? "bg-blue-500" : "bg-green-500"
              }`}
            >
              {buttonType === "Edit" ? "Update Student" : "Add New Student"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
