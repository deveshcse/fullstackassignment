import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/allstudents",
    }),
    addNewStudent: builder.mutation({
      query: (studentData) => ({
        url: "addnewstudent",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: studentData,
      }),
    }),
    updateStudent: builder.mutation({
      query: ({ id, studentData }) => ({
        url: `updatestudent/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: studentData,
      }),
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `deletestudent/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useAddNewStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = api;
