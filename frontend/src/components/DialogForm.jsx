import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

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

const DialogForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      studentName: "Vatsal Trivedi",
      cohort: "AY 2024-25",
      course1: "CBSE 9 Science",
      course2: "CBSE 9 Math",
      dateJoined: "2024-11-17",
      lastLogin: "2024-11-17T16:16",
      status: true,
    },
  });

  function onSubmit(data) {

    console.log("Submitted data:", data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#E9EDF1] text-[#3F526E] font-bold"
        >
          <Plus /> Add new Student
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 grid">
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
            {/* Other fields here */}
            <FormField
              control={form.control}
              name="cohort"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cohort</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="AY 2024-25"
                      {...field}
                    />
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
                    <Input
                      placeholder="CBSE 9 Science"
                      {...field}
                    />
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
                    <Input
                      placeholder="CBSE 9 Math"
                      {...field}
                    />
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
                    <Input type="date"  {...field} />
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
                    <Input
                      type="datetime-local"
                      {...field}
                    />
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
