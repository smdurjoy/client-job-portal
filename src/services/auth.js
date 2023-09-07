import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set("Content-type", "application/json");
            headers.set('Access-Control-Allow-Origin', '*');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        sendOtp: builder.mutation({
            query: ({phone_number, device_hash}) => ({
                url: `/auth/send/otp/`,
                method: 'POST',
                body: {phone_number, device_hash},
            })
        }),
        otpVerification: builder.mutation({
            query: ({phone_number, otp}) => ({
                url: `/auth/verify/otp/`,
                method: 'POST',
                body: {phone_number, otp},
            })
        }),
        companyRegister: builder.mutation({
            query: ({company_name, phone_number, email, password}) => ({
                url: `/auth/company/signup/`,
                method: 'POST',
                body: {company_name, phone_number, email, password},
            })
        }),
    }),
})

export const { useSendOtpMutation, useOtpVerificationMutation, useCompanyRegisterMutation } = authApi