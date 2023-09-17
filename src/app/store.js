import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import {commonApi} from "../services/common";
import {jobApi} from "../services/jobs";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import appSliceReducer from '../services/app';
import {authApi} from "../services/auth";
import {authJobApi} from "../services/authJobs";
import {workerApi} from "../services/worker";
import {imageUpload} from "../services/imageUpload";
import {companyApi} from "../services/company";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    app: appSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [commonApi.reducerPath]: commonApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    [authJobApi.reducerPath]: authJobApi.reducer,
    [workerApi.reducerPath]: workerApi.reducer,
    [imageUpload.reducerPath]: imageUpload.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            authApi.middleware,
            commonApi.middleware,
            jobApi.middleware,
            authJobApi.middleware,
            workerApi.middleware,
            imageUpload.middleware,
            companyApi.middleware,
        ])
})

export const persistor = persistStore(store);