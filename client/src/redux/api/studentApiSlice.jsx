import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_BASE_URL= import.meta.env.VITE_BACKEND_BASE_URL;

console.log(BACKEND_BASE_URL);


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_BASE_URL}` }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/allstudents",
      transformResponse: (data) => data.reverse(),
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
