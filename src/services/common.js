import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const commonApi = createApi({
    reducerPath: 'commonApi',
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
            query: () => `/common/countries/`,
        }),
        getStatesByCountry: builder.query({
            query: (countryId) => `/common/states/${countryId}/`,
        }),
        getCitiesByCountry: builder.query({
            query: (countryId) => `/common/cities/${countryId}/`,
        }),
        getAreasByCountry: builder.query({
            query: (countryId) => `/common/areas/${countryId}/`,
        }),
        getDegrees: builder.query({
            query: () => `/common/degrees/`,
        }),
    }),
})

export const {
    useGetCountriesQuery,
    useGetDegreesQuery,
    useGetStatesByCountryQuery,
    useGetCitiesByCountryQuery,
    useGetAreasByCountryQuery,
} = commonApi