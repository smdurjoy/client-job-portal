import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countryApi = createApi({
    reducerPath: 'countryApi',
    tagTypes: ['countries'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kamla.xyz/',
        prepareHeaders: (headers) => {
            headers.set("Content-type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => `common/countries/`,
            providesTags: 'countries'
        }),
    }),
})

export const { useGetCountriesQuery } = countryApi