import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const companyApi = createApi({
    reducerPath: 'companyApi',
    tagTypes: ['companyProfileDetails', 'companyJobs'],
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
        getCompanyDetails: builder.query({
            query: (companyId) => `/company/details/${companyId}/`,
            providesTags: ['companyProfileDetails']
        }),
        getCompanyJobs: builder.query({
            query: (companyId) => `/company/jobs/${companyId}/`,
            providesTags: ['companyJobs']
        }),
        updateCompanyProfile: builder.mutation({
            query: ({
                        user_id,
                        industry_id,
                        country_id,
                        state_id,
                        city_id,
                        area_id,
                        address,
                        zip_code,
                        contact_person_name,
                        contact_person_position,
                        contact_person_mobile,
                        contact_person_email
                    }) => ({
                url: `/company/update/profile/`,
                method: 'POST',
                body: {
                    user_id,
                    industry_id,
                    country_id,
                    state_id,
                    city_id,
                    area_id,
                    address,
                    zip_code,
                    contact_person_name,
                    contact_person_position,
                    contact_person_mobile,
                    contact_person_email
                },
            }),
            invalidatesTags: ['companyProfileDetails'],
        }),
    }),
})

export const {
    useGetCompanyDetailsQuery,
    useGetCompanyJobsQuery,
    useUpdateCompanyProfileMutation,
} = companyApi