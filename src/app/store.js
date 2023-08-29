import { configureStore } from '@reduxjs/toolkit'
import { countryApi } from "../services/country";
import {jobApi} from "../services/jobs";

export const store = configureStore({
    reducer: {
        [countryApi.reducerPath]: countryApi.reducer,
        [jobApi.reducerPath]: jobApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(countryApi.middleware)
            .concat(jobApi.middleware),
})