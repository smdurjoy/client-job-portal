import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user_id: null,
    phone_number: null,
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
export default appSlice.reducer;
