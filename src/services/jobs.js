import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const jobApi = createApi({
    reducerPath: 'jobApi',
    tagTypes: ['allJobs', 'categories'],
    baseQuery: fetchBaseQuery({
        baseUrl,
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