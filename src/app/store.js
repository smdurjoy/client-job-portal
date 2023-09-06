import {combineReducers, configureStore,} from '@reduxjs/toolkit'
import {countryApi} from "../services/country";
import {jobApi} from "../services/jobs";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import appSliceReducer from '../services/app';
import {authApi} from "../services/auth";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    app: appSliceReducer,
    [authApi.reducerPath]: authApi.reducer,
    [countryApi.reducerPath]: countryApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            authApi.middleware,
            countryApi.middleware,
            jobApi.middleware
        ])
})

export const persistor = persistStore(store);