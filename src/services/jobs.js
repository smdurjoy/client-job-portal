import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const jobApi = createApi({
    reducerPath: 'jobApi',
    tagTypes: ['jobDetails'],
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
            query: () => `/job/all/`,
        }),
        searchJobs: builder.query({
            query: ({keyword, countryId, categoryId}) => `/job/search?keyword=${keyword}&country=${countryId}&category=${categoryId}`,
        }),
        getAllJobCategories: builder.query({
            query: () => `/job/categories/`,
        }),
        getSalaryTypes: builder.query({
            query: () => `/job/salary/types/`,
        }),
    }),
})

export const {
    useGetAllJobsQuery,
    useGetAllJobCategoriesQuery,
    useSearchJobsQuery,
    useGetSalaryTypesQuery,
} = jobApi