import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const countryApi = createApi({
    reducerPath: 'countryApi',
    tagTypes: ['countries'],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
            headers.set("Content-type", "application/json");
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