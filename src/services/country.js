import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.kamla.xyz/',
        prepareHeaders: (headers) => {
            headers.set("Content-type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => `common/countries/`,
        }),
    }),
})

export const { useGetCountriesQuery } = countryApi