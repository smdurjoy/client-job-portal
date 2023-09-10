import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const authJobApi = createApi({
    reducerPath: 'authJobApi',
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
        getJobLevels: builder.query({
            query: () => `/job/levels/`,
        }),
        getJobTypes: builder.query({
            query: () => `/job/types/`,
        }),
        getJobEmploymentStatus: builder.query({
            query: () => `/job/employment/status/`,
        }),
        getJobPlaces: builder.query({
            query: () => `/job/work/places/`,
        }),
        getJobSkills: builder.query({
            query: () => `/job/skills/`,
        }),
        getJobBenefits: builder.query({
            query: () => `/job/benefits/`,
        }),
        createJobBasics: builder.mutation({
            query: ({
                        user_id,
                        job_title,
                        job_type_id,
                        job_category_id,
                        job_level_id,
                        employment_status_id,
                        work_place_id,
                        salary_range,
                        no_of_vacancies,
                        job_responsibility,
                        application_deadline,
                        job_description,
                        salary_type,
                    }) => ({
                url: `/job/create/basic/`,
                method: 'POST',
                body: {
                    user_id,
                    job_title,
                    job_type_id,
                    job_category_id,
                    job_level_id,
                    employment_status_id,
                    work_place_id,
                    salary_range,
                    no_of_vacancies,
                    job_responsibility,
                    application_deadline,
                    job_description,
                    salary_type,
                },
            })
        }),
        createJobRequirements: builder.mutation({
            query: ({
                        job_id,
                        minimum_age,
                        maximum_age,
                        degree_id,
                        require_experience,
                        skills_ids,
                        gender_ids,
                        benefit_ids,
                        cv_receiving_ids,
                    }) => ({
                url: `/job/create/requirements/`,
                method: 'POST',
                body: {
                    job_id,
                    minimum_age,
                    maximum_age,
                    degree_id,
                    require_experience,
                    skills_ids,
                    gender_ids,
                    benefit_ids,
                    cv_receiving_ids,
                },
            })
        }),
        createJobAddress: builder.mutation({
            query: ({
                        job_id,
                        country_id,
                        state_id,
                        city_id,
                        area_id,
                    }) => ({
                url: `/job/create/address/`,
                method: 'POST',
                body: {
                    job_id,
                    country_id,
                    state_id,
                    city_id,
                    area_id,
                },
            })
        }),
    }),
})

export const {
    useGetJobLevelsQuery,
    useGetJobTypesQuery,
    useGetJobEmploymentStatusQuery,
    useGetJobPlacesQuery,
    useGetJobSkillsQuery,
    useGetJobBenefitsQuery,
    useCreateJobBasicsMutation,
    useCreateJobRequirementsMutation,
    useCreateJobAddressMutation,
} = authJobApi