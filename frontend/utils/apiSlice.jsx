import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api"}),
    endpoints: (builder) => ({
        getStudents: builder.query({
            query: ()=> "/allstudents",
        }),
    }),
});




export const {useGetStudentsQuery} = api;