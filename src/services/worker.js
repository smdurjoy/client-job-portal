import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const workerApi = createApi({
    reducerPath: 'workerApi',
    tagTypes: ['appliedJobs'],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, {getState}) => {
            const {app: {token}} = getState();
            headers.set("Content-type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Authorization', `Token ${token}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAppliedJobs: builder.query({
            query: (workerId) => `/worker/applied/job/${workerId}/`,
            providesTags: ['appliedJobs'],
        }),
        applyToJob: builder.mutation({
            query: ({job_id, worker_id}) => ({
                url: `/worker/job/apply/`,
                method: 'POST',
                body: {
                    job_id,
                    worker_id
                },
            }),
            invalidatesTags: ['appliedJobs'],
        }),
    }),
})

export const {
    useApplyToJobMutation,
    useGetAppliedJobsQuery,
} = workerApi