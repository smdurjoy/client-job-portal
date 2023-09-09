import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WORKER_LOGIN} from "../helpers/Constants";

const initialState = {
    token: null,
    user_id: null,
    phone_number: null,
    user_type: WORKER_LOGIN,
    company_id: null,
    company_email: null,
};

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction) => {
            state.token = action.payload;
        },
        setUserPhone: (state, action: PayloadAction) => {
            state.phone_number = action.payload;
        },
        setUserId: (state, action: PayloadAction) => {
            state.user_id = action.payload;
        },
        setUserType: (state, action: PayloadAction) => {
            state.user_type = action.payload;
        },
        setCompanyEmail: (state, action: PayloadAction) => {
            state.company_email = action.payload;
        },
        setCompanyId: (state, action: PayloadAction) => {
            state.company_id = action.payload;
        },
    }
});

export const {
    setToken
} = appSlice.actions;
export const {
    setUserPhone
} = appSlice.actions;
export const {
    setUserId
} = appSlice.actions;
export const {
    setUserType
} = appSlice.actions;
export const {
    setCompanyEmail
} = appSlice.actions;
export const {
    setCompanyId
} = appSlice.actions;
export default appSlice.reducer;
