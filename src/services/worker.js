import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const workerApi = createApi({
    reducerPath: 'workerApi',
    tagTypes: ['appliedJobs', 'workerProfileDetails'],
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
        getWorkerDetails: builder.query({
            query: (workerId) => `/worker/details/${workerId}/`,
            providesTags: ['workerProfileDetails']
        }),
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
        updateBasicProfileInfo: builder.mutation({
            query: ({
                        user_id,
                        first_name,
                        last_name,
                        phone,
                        email,
                        passport_number,
                        date_of_birth,
                        gender_id
                    }) => ({
                url: `/auth/set/worker/basic/`,
                method: 'POST',
                body: {
                    user_id,
                    first_name,
                    last_name,
                    phone,
                    email,
                    passport_number,
                    date_of_birth,
                    gender_id,
                },
            }),
            invalidatesTags: (_result, _error, arg) => [
                {type: 'workerProfileDetails', id: arg.user_id},
            ],
        }),
        updateProfileAddress: builder.mutation({
            query: ({
                        user_id,
                        country_id,
                        state_id,
                        city_id,
                        area_id,
                        address_line1,
                        postal_code,
                        address_line2,
                    }) => ({
                url: `/auth/set/worker/address/`,
                method: 'POST',
                body: {
                    user_id,
                    country_id,
                    state_id,
                    city_id,
                    area_id,
                    address_line1,
                    postal_code,
                    address_line2,
                },
            }),
            invalidatesTags: ['workerProfileDetails'],
        }),
        updateProfileEducation: builder.mutation({
            query: ({
                        user_id,
                        degree_list
                    }) => ({
                url: `/auth/set/worker/education/`,
                method: 'POST',
                body: {
                    user_id,
                    degree_list
                },
            }),
            invalidatesTags: ['workerProfileDetails'],
        }),
        updateProfileExperience: builder.mutation({
            query: ({
                        worker_id,
                        experience_list
                    }) => ({
                url: `/worker/set/experiences/`,
                method: 'POST',
                body: {
                    worker_id,
                    experience_list
                },
            }),
            invalidatesTags: ['workerProfileDetails'],
        }),
        updateProfileSkill: builder.mutation({
            query: ({
                        user_id,
                        skill_list
                    }) => ({
                url: `/auth/set/worker/skill/`,
                method: 'POST',
                body: {
                    user_id,
                    skill_list
                },
            }),
            invalidatesTags: ['workerProfileDetails'],
        }),
    }),
})

export const {
    useApplyToJobMutation,
    useGetWorkerDetailsQuery,
    useGetAppliedJobsQuery,
    useUpdateBasicProfileInfoMutation,
    useUpdateProfileAddressMutation,
    useUpdateProfileEducationMutation,
    useUpdateProfileExperienceMutation,
    useUpdateProfileSkillMutation,
} = workerApi