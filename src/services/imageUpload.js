import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.kamla.xyz' : '';

export const imageUpload = createApi({
    reducerPath: 'imageUpload',
    tagTypes: ['workerProfileDetails'],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, {getState}) => {
            const {app: {token}} = getState();
            headers.set("Content-type", "multipart/form-data");
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Authorization', `Token ${token}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        updateWorkerProfilePicture: builder.mutation({
            query: (formData) => ({
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                url: `/worker/upload/profile/picture/`,
                method: 'POST',
                body: {
                    formData
                },
            }),
            invalidatesTags: ['workerProfileDetails'],
        }),
    }),
})

export const {
    useUpdateWorkerProfilePictureMutation,
} = imageUpload