import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobApi = createApi({
    reducerPath: 'jobApi',
    tagTypes: ['allJobs', 'categories'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kamla.xyz/',
        prepareHeaders: (headers) => {
            headers.set("Content-type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: () => `job/all/`,
            providesTags: ['allJobs'],
        }),
        getAllJobCategories: builder.query({
            query: () => `job/categories/`,
            providesTags: ['categories'],
        }),
    }),
})

export const { useGetAllJobsQuery, useGetAllJobCategoriesQuery } = jobApi